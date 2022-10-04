import Block from '../../utils/Block';
import template from './profile_change_info.hbs';
import { Button } from '../../components/button/';
import { Input } from '../../components/input';
import { ProfileSidebarBlock } from '../../blocks/profile_sidebar';
import { ProfileAvaBlock } from '../../blocks/profile_ava';
import { ProfileChangeInfoRowBlock } from '../../blocks/profile_change_info_row';
import {ModalBlock, ModalBlockProps} from '../../blocks/modal';
import {showModal} from "../../utils/helpers";

interface ProfileChangeInfoPageProps {
  profileSidebarBlock: typeof ProfileSidebarBlock;
  profileAvaBlock: ProfileAvaBlock;
  profileChangeInfoRowBlock: ProfileChangeInfoRowBlock[];
  profileChangeInfoSaveButton: Button;
}

export class ProfileChangeInfoPage extends Block<ProfileChangeInfoPageProps> {
  constructor(props: ProfileChangeInfoPageProps) {
    super('div', props);
  }

  init(){
    let profileChangeInfoRowBlocksData = [];
    let url = '';
    if (window.location.pathname === '/profile-change-data'){
      profileChangeInfoRowBlocksData = [
                                      {type:"text", description:"Почта", name:"email", id:"email", errorMessage:"Неверный адрес почты"},
                                      {type:"text", description:"Логин", name:"login", id:"login", errorMessage:"Неверный Логин"},
                                      {type:"text", description:"Имя", name:"first_name", id:"first_name", errorMessage:"Неверное Имя"},
                                      {type:"text", description:"Фамилия", name:"second_name", id:"second_name", errorMessage:"Неверная Фамилия"},
                                      {type:"text", description:"Имя в чате", name:"display_name", id:"display_name", errorMessage:"Неверное Имя"},
                                      {type:"text", description:"Телефон", name:"phone", id:"phone", errorMessage:"Неверный телефон"}
                                      ];
      url = 'userProfile';                                
    }else{
      profileChangeInfoRowBlocksData = [
                                      {type:"password", description:"Старый пароль", name:"oldPassword", id:"oldPassword", errorMessage:"Неверный пароль"},
                                      {type:"password", description:"Новый пароль", name:'newPassword', id:"password", errorMessage:"Некорректный пароль"},
                                      {type:"password", description:"Повторите новый пароль", name:"passwordval", id:"passwordval", errorMessage:"Пароли не совпадают"}
                                      ];
      url = 'userPassword'; 
    }
    const profileChangeInfoSaveButton = new Button({formId:'profile-data-form',url:url,title:'Сохранить',class:'change-profil-forma-button'});
    
    const profileSidebarBlock = new ProfileSidebarBlock({});
    const profileAvaBlock = new ProfileAvaBlock({events:{click:()=>showModal('profileAvaChangeModalBlock')},hasAvatar:false});
    let profileChangeInfoRowBlocks:ProfileChangeInfoRowBlock[]=[];
    
    profileChangeInfoRowBlocksData.forEach((data) => {
      let profileChangeInfoRowInput = new Input({class:'change-profil-forma-inp-input',placeholder:data.description,name:data.name,inputId:data.id,type:data.type});
      let profileChangeInfoRowBlock = new ProfileChangeInfoRowBlock({
                                                                      errorMessage: data.errorMessage,
                                                                      description: data.description,
                                                                      labelFor: data.id,
                                                                      profileChangeInfoRowInput: profileChangeInfoRowInput,                                                               
                                                                    });
      profileChangeInfoRowBlocks.push(profileChangeInfoRowBlock);  
    });
    this.children.profileSidebarBlock = profileSidebarBlock;
    this.children.profileAvaBlock = profileAvaBlock;
    this.children.profileChangeInfoRowBlock = profileChangeInfoRowBlocks;
    this.children.profileChangeInfoSaveButton = profileChangeInfoSaveButton;
    const saveAvaButton = new Button({modalId:'profileAvaChangeModalBlock',formId:'change-avatar-modal',url:'avatar',class:'profil-modal-form-button', isSendMessageButton: false, title:'Поменять'});
    this.children.profileAvaChangeModalBlock = new ModalBlock({modalId:'profileAvaChangeModalBlock',formId:'change-avatar-modal',isFileModal:true, button:[saveAvaButton],title:'Загрузить файл'} as ModalBlockProps);

  }

  render() {
    return this.compile(template, this.props);
  }
}


