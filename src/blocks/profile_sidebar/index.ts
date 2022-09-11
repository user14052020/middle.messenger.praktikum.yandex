import Block from '../../utils/Block';
import template from './profile_sidebar.hbs';


export class ProfileSidebarBlock extends Block {
  constructor() {
    super('div');
  }

  render() {
    return this.compile(template);
  }
}