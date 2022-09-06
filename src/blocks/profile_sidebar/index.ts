import Block from '../../utils/Block';
import template from './profile_sidebar.hbs';

interface ProfileSidebarBlockProps {

}

export class ProfileSidebarBlock extends Block {
  constructor(props: ProfileSideBarBlockProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}