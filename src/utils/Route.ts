import { isEqual,PlainObject } from './helpers';
import Block from "./Block";

function render(query: any, block: Block) {
  const root = document.querySelector(query);
  root.append(block.getContent());
  block.dispatchComponentDidMount();
  return root;
}
// interface ComponentConstructable<P> {
//     new(): Block<P>
// }
export class Route {

    protected _props:Record<string, any>;
    protected _blockClass:typeof Block;
    protected _block:Block|null;
    protected _pathname:PlainObject<any>;

    constructor(pathname:PlainObject, view:typeof Block, props:Record<string, any>) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname:PlainObject) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname:PlainObject) {
        return isEqual(pathname, this._pathname);
    }

    render() {

        if (!this._block) {
            this._block = new this._blockClass() as ComponentConstructable;
            render(this._props.rootQuery, this._block as Block);
            return;
        }

        this._block.show();
    }
}
export default Route;