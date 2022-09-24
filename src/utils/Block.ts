import { EventBus } from "./EventBus";
import { nanoid } from 'nanoid';

// Нельзя создавать экземпляр данного класса
abstract class Block<P extends Record<string, any> = any> {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  };

  public id = nanoid(6);
  protected props: P;
  public children: Record<string, Block | Block[]> ;
  private eventBus: () => EventBus;
  private _element: HTMLElement | null = null;
  private _meta: { tagName: string; props: P; };

  /** JSDoc
   * @param {string} tagName
   *
   * @returns {void}
   */
  constructor(tagName = "div", propsWithChildren: P = {} as P) {
    const eventBus = new EventBus();

    const { props, children } = this._getChildrenAndProps(propsWithChildren);

    this._meta = {
      tagName,
      props: props as P
    };

    this.children = children;
    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  private _getChildrenAndProps(childrenAndProps: P):{ props: P, children: Record<string, Block | Block[]>}  {
    const props: Record<string, any> = {};
    const children: Record<string, Block | Block[]> = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
    if (Array.isArray(value) && value.every(v => v instanceof Block)) {
        children[key] = value;
      } else if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    })
    return { props: props as P, children };
  }

  private _addEvents() {
    const {events = {}} = this.props as P & { events: Record<string, () =>void> };

    Object.keys(events).forEach(eventName => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  private _init() {
    this._createResources();
    this.init();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init() {}

  private _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {}

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    Object.values(this.children).forEach(child => {
      if (Array.isArray(child)){
        child.forEach(grandsons => {
          grandsons.dispatchComponentDidMount();
        });
      }else{
        child.dispatchComponentDidMount();
      }
    });

  }

  private _componentDidUpdate() {
    if (this.componentDidUpdate()) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate() {
    return true;
  }

  setProps = (nextProps: P) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render() {

    const fragment = this.render();

    const newElement = fragment.firstElementChild as HTMLElement;

    if (this._element && newElement) {
      this._element.replaceWith(newElement);
    }

    this._element = newElement;

    this._addEvents();
  }

  protected compile(template: (context: any) => string, context: any = {}){
    const contextAndStubs : Record<string, any> = {...context};
    Object.entries(this.children).forEach(([name, component]) => {
        if (Array.isArray(component)){
            contextAndStubs[name] = component.map(el => `<div data-id="${el.id}"></div>`);
        }
        else{
         contextAndStubs[name] = `<div data-id="${component.id}"></div>`;       
        }
    });
    const html = template(contextAndStubs);
    const bufTemplate = document.createElement('template');
    bufTemplate.innerHTML = html;
    Object.entries(this.children).forEach(([_, component]) => {
        if (Array.isArray(component)){
          component.forEach((el : Block) => {
              const stub = bufTemplate.content.querySelector(`[data-id="${el.id}"]`);
              if (!stub)
                  return;
              stub.replaceWith(el.getContent()!);
          });
        }
        else{
          const stub = bufTemplate.content.querySelector(`[data-id="${component.id}"]`);
          if (!stub){
            return;
          }
          component.getContent()?.append(...Array.from(stub.childNodes));
          stub.replaceWith(component.getContent()!);
        }
    });
    return bufTemplate.content;
  }
  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  getContent() {
    return this.element;
  }

  private _makePropsProxy(props: P) {
    const self = this;
    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop: string, value) {
        const oldTarget = { ...target }
        target[prop as keyof P] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      }
    });
  }

  private _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  show() {
    this.getContent()!.style.display = "block";
  }

  hide() {
    this.getContent()!.style.display = "none";
  }
}

export default Block;