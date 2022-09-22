import { isEqual,PlainObject } from './helpers';
import Block from "./Block";

function render(query, block) {
  const root = document.querySelector(query);
  root.append(block.getContent());
  block.dispatchComponentDidMount();
  return root;
}

export class Route {

    protected _props:Record<string, any>;
    protected _blockClass:Block;
    protected _block:Block;
    protected _pathname:PlainObject<any>;

    constructor(pathname:PlainObject, view:Block, props:Record<string, any>) {
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
            this._block = new this._blockClass();
            render(this._props.rootQuery, this._block);
            return;
        }

        this._block.show();
    }
}
export default Route;