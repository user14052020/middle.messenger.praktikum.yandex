import Block from '../../utils/Block';
import template from './profile_ava.hbs';


export class ProfileAvaBlock extends Block {
  constructor() {
    super('div');
  }

  render() {
    return this.compile(template);
  }
}