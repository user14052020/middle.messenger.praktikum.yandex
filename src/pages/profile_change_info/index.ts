import Block from '../../utils/Block';
import template from './profile_change_info.hbs';
import { Button } from '../../components/button/';
import { ProfileSidebarBlock } from '../../blocks/profile_sidebar';
import { ProfileAvaBlock } from '../../blocks/profile_ava';
import { ProfileChangeInfoRowBlock } from '../../blocks/profile_change_info_row';

interface ProfileChangeInfoPageProps {
  profileSidebarBlock: ProfileSidebarBlock;
  profileAvaBlock: ProfileAvaBlock;
  profileChangeInfoRowBlock: ProfileChangeInfoRowBlock[];
  profileChangeInfoSaveButton: Button;
}

export class ProfileChangeInfoPage extends Block<ProfileChangeInfoPageProps> {
  constructor(props: ProfileChangeInfoPageProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}