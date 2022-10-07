import Block from '../../utils/Block';
import template from './link.hbs';

export interface LinkProps {
  href?: string;
  hasLable?: boolean;
  class?: string;
  events?: {
    click: (e: Event) => void;

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