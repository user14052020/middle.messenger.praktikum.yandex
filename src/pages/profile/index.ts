import Block from '../../utils/Block';
import template from './profile.hbs';
import { ProfileSidebarBlock,ProfileSidebarBlockProps } from '../../blocks/profile_sidebar';
import { ProfileAvaBlock } from '../../blocks/profile_ava';
import { ProfileRowBlock } from '../../blocks/profile_row';
import { ProfileChangeLinkBlock } from '../../blocks/profile_change_link';
import { ModalBlock,ModalBlockProps } from '../../blocks/modal';
import store, { withStore } from '../../utils/Store';
import AuthController from '../../controllers/AuthController';
import { Link, LinkProps } from '../../components/link';
import {Button} from "../../components/button";
import {showModal} from "../../utils/helpers";

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
      this.children.logoutLink = new Link({ label: 'Выйти', class:'out-profil-link', events: {click: (e:Event) => {e.preventDefault(); AuthController.logout();}}} as LinkProps);
      this.children.profileSidebarBlock = new ProfileSidebarBlock({} as ProfileSidebarBlockProps);
      let hasAvatar = false;
      let avatarFileLink = '';
      if(user.user.avatar){
        hasAvatar = true;
        avatarFileLink = 'https://ya-praktikum.tech/api/v2/resources'+user.user.avatar;
      }
      this.children.profileAvaBlock = new ProfileAvaBlock({events:{click:()=>showModal('profileAvaChangeModalBlock')},hasAvatar:hasAvatar, avatarFileLink:avatarFileLink});
      const saveAvaButton = new Button({modalId:'profileAvaChangeModalBlock',formId:'change-avatar-modal',url:'avatar',class:'profil-modal-form-button', isSendMessageButton: false, title:'Поменять'});
      this.children.profileAvaChangeModalBlock = new ModalBlock({modalId:'profileAvaChangeModalBlock',formId:'change-avatar-modal',isFileModal:true, button:[saveAvaButton],title:'Загрузить файл'} as ModalBlockProps);
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