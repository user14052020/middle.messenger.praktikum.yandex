import Block from '~/utils/Block';
import template from './menu.hbs';


export class MenuBlock extends Block {
  constructor() {
    super('nav');
  }

  render() {
    return this.compile(template);
  }
}