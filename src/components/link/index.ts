import Block from '../../utils/Block';
import template from './link.hbs';

interface LinkProps {
  href?: string;
  lable?: boolean;
  class?: string;
  events?: {
    click: () => void;

  };
}

export class Link extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}