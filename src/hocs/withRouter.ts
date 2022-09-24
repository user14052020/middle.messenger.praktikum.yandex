import Block from '../utils/Block';
import Router from '../utils/Router';

interface ComponentConstructable<P extends Record<string, any>> {
  new (props?: P): Block<P>
}
export function withRouter(Component: ComponentConstructable<any>) {
  type Props = typeof Component extends typeof Block<infer P extends Record<string, any>> ? P : any;

  return class WithRouter extends Component {
    constructor(props: Props & PropsWithRouter) {
      super({ ...props, router: Router });
    }
  }
}

export interface PropsWithRouter {
  router: typeof Router;
}