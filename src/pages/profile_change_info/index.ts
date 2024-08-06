import Block from '../../utils/Block';
import template from './profile_change_info.hbs';
import { Button } from '../../components/button/';
import { Input } from '../../components/input';
import { ProfileSidebarBlock } from '../../blocks/profile_sidebar';
import { ProfileAvaBlock } from '../../blocks/profile_ava';
import { ProfileChangeInfoRowBlock } from '../../blocks/profile_change_info_row';
import {ModalBlock, ModalBlockProps} from '../../blocks/modal';
import {showModal} from "~src/utils/helpers";

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
                                      {type:"text", description:"E-Mail", name:"email", id:"email", errorMessage:"Invalid email address"},
                                      {type:"text", description:"Login", name:"login", id:"login", errorMessage:"Invalid Login"},
                                      {type:"text", description:"Name", name:"first_name", id:"first_name", errorMessage:"Wrong Name"},
                                      {type:"text", description:"Surname", name:"second_name", id:"second_name", errorMessage:"Wrong Last Name"},
                                      {type:"text", description:"Name in the chat", name:"display_name", id:"display_name", errorMessage:"Wrong Name"},
                                      {type:"text", description:"Telephone", name:"phone", id:"phone", errorMessage:"Wrong phone number"}
                                      ];
      url = 'userProfile';                                
    }else{
      profileChangeInfoRowBlocksData = [
                                      {type:"password", description:"Old password", name:"oldPassword", id:"oldPassword", errorMessage:"Invalid password"},
                                      {type:"password", description:"New password", name:'newPassword', id:"password", errorMessage:"Invalid password"},
                                      {type:"password", description:"Repeat the new password", name:"passwordval", id:"passwordval", errorMessage:"Passwords don`t match"}
                                      ];
      url = 'userPassword'; 
    }
    const profileChangeInfoSaveButton = new Button({formId:'profile-data-form',url:url,title:'Save',class:'change-profil-forma-button'});
    
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
    const saveAvaButton = new Button({modalId:'profileAvaChangeModalBlock',formId:'change-avatar-modal',url:'avatar',class:'profil-modal-form-button', isSendMessageButton: false, title:'Change'});
    this.children.profileAvaChangeModalBlock = new ModalBlock({modalId:'profileAvaChangeModalBlock',formId:'change-avatar-modal',isFileModal:true, button:[saveAvaButton],title:'Upload avatar'} as ModalBlockProps);

  }

  render() {
    return this.compile(template, this.props);
  }
}


