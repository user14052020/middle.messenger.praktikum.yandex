
function isEqual(lhs, rhs) {
  return lhs === rhs;
}

function render(query, block) {
  const root = document.querySelector(query);
  root.append(block.getContent());
  block.dispatchComponentDidMount();
  return root;
}

export class Route {
    constructor(pathname, view, props, blockProps) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
        this._blockProps = blockProps;
    }

    navigate(pathname) {
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

    match(pathname) {
        return isEqual(pathname, this._pathname);
    }

    render() {

        if (!this._block) {
            this._block = new this._blockClass(this._blockProps);
            render(this._props.rootQuery, this._block);
            return;
        }

        this._block.show();
    }
}
export default Route;