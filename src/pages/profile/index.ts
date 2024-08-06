import Block from '../../utils/Block';
import template from './profile.hbs';
import { ProfileSidebarBlock,ProfileSidebarBlockProps } from '../../blocks/profile_sidebar';
import { ProfileAvaBlock } from '../../blocks/profile_ava';
import { ProfileRowBlock } from '../../blocks/profile_row';
import { ProfileChangeLinkBlock } from '../../blocks/profile_change_link';
import { ModalBlock,ModalBlockProps } from '../../blocks/modal';
import store, { withStore } from '../../utils/Store';
import AuthController from '../../controllers/AuthController';
import { Link } from '../../components/link';
import {Button} from "~src/components/button";
import {showModal} from "~src/utils/helpers";

interface ProfilePageProps {
  profileSidebarBlockType: typeof ProfileSidebarBlock;
  profileAvaBlock: ProfileAvaBlock;
  profileAvaChangeModalBlock: ModalBlock;
  profileRowBlock: ProfileRowBlock[];
  profileChangeLinkBlock: ProfileChangeLinkBlock[];
  isChangeAva: boolean;
  logoutLink: Link;
  avatar?:string;

}

class ProfilePageBase extends Block<ProfilePageProps> {
  constructor(props: ProfilePageProps) {
    super('div', props);
  }

  init() {
    //   AuthController.fetchUser();
    const user = store.getState();
    if (Object.keys(user).length !== 0 ){
      this.children.logoutLink = new Link({ label: 'Exit', class:'out-profil-link', events: {click: (e:Event) => {e.preventDefault(); AuthController.logout();}}});
      this.children.profileSidebarBlock = new ProfileSidebarBlock({} as ProfileSidebarBlockProps);
      let hasAvatar = false;
      let avatarFileLink = '';
      if(user.user.avatar){
        hasAvatar = true;
        avatarFileLink = 'https://ya-praktikum.tech/api/v2/resources'+user.user.avatar;
      }
      this.children.profileAvaBlock = new ProfileAvaBlock({events:{click:()=>showModal('profileAvaChangeModalBlock')},hasAvatar:hasAvatar, avatarFileLink:avatarFileLink});
      const saveAvaButton = new Button({modalId:'profileAvaChangeModalBlock',formId:'change-avatar-modal',url:'avatar',class:'profil-modal-form-button', isSendMessageButton: false, title:'Change'});
      this.children.profileAvaChangeModalBlock = new ModalBlock({modalId:'profileAvaChangeModalBlock',formId:'change-avatar-modal',isFileModal:true, button:[saveAvaButton],title:'Upload avatar'} as ModalBlockProps);
      const userData = [
                        {description:"E-Mail",value:user.user.email},
                        {description:"Login",value:user.user.login},
                        {description:"Name",value:user.user.first_name},
                        {description:"Surname", value:user.user.second_name},
                        {description:"Name in the chat", value:user.user.display_name},
                        { description:"Telephone", value:user.user.phone}
                      ];
      const profileChangeLinksData = [
                                    {description:"Change the data",link:"profile-change-data"},
                                    {description:"Change the password",link:"profile-change-pass"},
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

  render() {
    return this.compile(template, this.props);
  }

  componentDidUpdate(){
      (this.children.profileAvaBlock as Block).setProps({hasAvatar:true, avatarFileLink:'https://ya-praktikum.tech/api/v2/resources'+this.props.avatar}) ;
    return true;
  }

}

const withUser = withStore((state) => ({ ...state.user }))

export const ProfilePage = withUser(ProfilePageBase);
