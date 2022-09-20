import Block from '../../utils/Block';
import template from './profile_sidebar.hbs';

interface ProfileSidebarBlockProps {
  events: {
    click: () => void;

  };
}
export class ProfileSidebarBlock extends Block<ProfileSidebarBlockProps> {
  constructor(props: ProfileSidebarBlockProps) {
    super('div',props);
  }

  render() {
    return this.compile(template);
  }
}