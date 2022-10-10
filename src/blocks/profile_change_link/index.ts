import Block from '~/utils/Block';
import template from './profile_change_link.hbs';

interface ProfileChangeLinkBlockProps {
  description:string;
  link:string;
}

export class ProfileChangeLinkBlock extends Block<ProfileChangeLinkBlockProps> {
  constructor(props: ProfileChangeLinkBlockProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}