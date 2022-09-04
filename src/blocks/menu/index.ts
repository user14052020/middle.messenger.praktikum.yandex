import Block from '../../utils/Block';
import template from './menu.hbs';

interface MenuBlockProps {
}

export class MenuBlock extends Block {
  constructor(props: MenuBlockProps) {
    super('nav', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}