import Block from '../../utils/Block';
import template from './profile_change_info.hbs';

interface ProfileChangeInfoPageProps {
  profileSidebarBlock: string;
  profileAvaBlock: string;
  profileChangeRowBlock: string;
  profileChangeInfoSaveButton: string;
}

export class ProfileChangeInfoPage extends Block<ProfileChangeInfoPageProps> {
  constructor(props: ProfileChangeInfoPageProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}