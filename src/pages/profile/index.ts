import Block from '../../utils/Block';
import template from './profile.hbs';
import { ProfileSidebarBlock } from '../../blocks/profile_sidebar';
import { ProfileAvaBlock } from '../../blocks/profile_ava';
import { ProfileRowBlock } from '../../blocks/profile_row';
import { ProfileChangeLinkBlock } from '../../blocks/profile_change_link';
import { withStore } from '../../utils/Store';
import AuthController from '../../controllers/AuthController';
import { Link } from '../../components/link';

interface ProfilePageProps {
  profileSidebarBlock: ProfileSidebarBlock;
  profileAvaBlock: ProfileAvaBlock;
  profileRowBlock: ProfileRowBlock[];
  profileChangeLinkBlock: ProfileChangeLinkBlock[];
  isChangeAva: boolean;
  logoutLink: Link; 
}

class ProfilePageBase extends Block<ProfilePageProps> {
  constructor(props: ProfilePageProps) {

    super('div', props);
     // console.log(first_name);
    // AuthController.fetchUser();
  }

  render() {
    return this.compile(template, this.props);
  }
}


const withUser = withStore((state) => ({ ...state.user }))

export const ProfilePage = withUser(ProfilePageBase);