import { Route } from "./Route";
import { PlainObject } from './helpers';
import Block from "./Block";

interface ComponentConstructable<P extends Record<string, any>> {
    new (props?: P): Block<P>
}
 class Router {

     public routes:Route[];
     public history:History;
     private _currentRoute:Route|null;
     private _rootQuery:string;
     static __instance: any;


    constructor(rootQuery:string) {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router.__instance = this;
    }

    use(pathname:string|PlainObject, block:ComponentConstructable<any>) {
        const route = new Route(pathname as PlainObject, block, {rootQuery: this._rootQuery});
        this.routes.push(route);
        return this;
    }

    start() {
        window.onpopstate = ((event:PopStateEvent) => {
            const target = event.currentTarget as Window;
            this._onRoute(target.location.pathname);
        });

        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname:string|PlainObject) {

        const route = this.getRoute(pathname);
        if (!route) {
            this.go('/404');
            return;
        }

        if (this._currentRoute && this._currentRoute !== route) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;
        route.render();
    }

    go(pathname:string|PlainObject) {
        this.history.pushState({}, '', pathname as string);
        this._onRoute(pathname);
    }

    back() {
        this.history.back();
    }

    forward() {
        this.history.forward();
    }

    getRoute(pathname:string|PlainObject) {
        return this.routes.find((route:Route) => route.match(pathname as PlainObject));
    }
}
export default new Router('#body');
