import Block from '../../utils/Block';
import template from './profile.hbs';

interface ProfilePageProps {
  profileSidebarBlock: string;
  profileAvaBlock: string;
  profileRowBlock: string;
  profileChangeLinkBlock: string;
  isChangeAva: boolean;
}

export class ProfilePage extends Block<ProfilePageProps> {
  constructor(props: ProfilePageProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}