import Block from '../../utils/Block';
import template from './profile.hbs';
import { ProfileSidebarBlock } from '../../blocks/profile_sidebar';
import { ProfileAvaBlock } from '../../blocks/profile_ava';
import { ProfileRowBlock } from '../../blocks/profile_row';
import { ProfileChangeLinkBlock } from '../../blocks/profile_change_link';
import { ProfileAvaChangeModalBlock } from '../../blocks/profile_ava_change_modal';
import { withStore } from '../../utils/Store';
import store from '../../utils/Store';
import AuthController from '../../controllers/AuthController';
import { Link } from '../../components/link';

interface ProfilePageProps {
  profileSidebarBlock: ProfileSidebarBlock;
  profileAvaBlock: ProfileAvaBlock;
  profileAvaChangeModalBlock: ProfileAvaChangeModalBlock;
  profileRowBlock: ProfileRowBlock[];
  profileChangeLinkBlock: ProfileChangeLinkBlock[];
  isChangeAva: boolean;
  logoutLink: Link; 

}

class ProfilePageBase extends Block<ProfilePageProps> {
  constructor(props: ProfilePageProps) {
    super('div', props);
  }

  init() {
    //   AuthController.fetchUser();
    this.test();

  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidUpdate(){
    this.children.profileAvaBlock.setProps({hasAvatar:true, avatarFileLink:'https://ya-praktikum.tech/api/v2/resources'+this.props.avatar});
  }

  test(){
    const user = store.getState();
    if (Object.keys(user).length !== 0 ){
      this.children.logoutLink = new Link({ label: 'Выйти', class:'out-profil-link', events: {click: (e) => {e.preventDefault(); AuthController.logout();}}});
      this.children.profileSidebarBlock = new ProfileSidebarBlock({});
      this.children.profileAvaBlock = new ProfileAvaBlock({hasAvatar:true, avatarFileLink:'https://ya-praktikum.tech/api/v2/resources'+user.user.avatar});
      this.children.profileAvaChangeModalBlock = new ProfileAvaChangeModalBlock();
      const userData = [
                        {description:"Почта",value:user.user.email},
                        {description:"Логин",value:user.user.login},
                        {description:"Имя",value:user.user.first_name},
                        {description:"Фамилия", value:user.user.second_name},
                        {description:"Имя в чате", value:user.user.display_name},
                        { description:"Телефон", value:user.user.phone}
                      ];
      const profileChangeLinksData = [
                                    {description:"Изменить данные",link:"profile-change-data"},
                                    {description:"Изменить пароль",link:"profile-change-pass"},
                                    ];
      
      let profileChangeLinkBlocks:ProfileChangeLinkBlock[] = [];                                       
      let profileRowBlocks:ProfileRowBlock[] = [];

      userData.forEach((data) => {
        let profileRowBlock = new ProfileRowBlock({ 
                                  description: data.description, 
                                  value: data.value, 
                                });
        profileRowBlocks.push(profileRowBlock);  
      });
      profileChangeLinksData.forEach((data) => {
        let profileChangeLinkBlock = new ProfileChangeLinkBlock({ 
                                  description: data.description, 
                                  link: data.link, 
                                });
        profileChangeLinkBlocks.push(profileChangeLinkBlock);  
      });  

      this.children.profileRowBlock = profileRowBlocks;
      this.children.profileChangeLinkBlock = profileChangeLinkBlocks;
    }
  }
}



const withUser = withStore((state) => ({ ...state.user }))

export const ProfilePage = withUser(ProfilePageBase);