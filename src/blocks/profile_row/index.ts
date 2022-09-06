import Block from '../../utils/Block';
import template from './profile_row.hbs';

interface ProfileRowBlockProps {
  description:string;
  value:string;
}

export class ProfileRowBlock extends Block {
  constructor(props: ProfileRowBlockProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}