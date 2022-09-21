import Block from '../../utils/Block';
import template from './profile_change_info.hbs';
import { Button } from '../../components/button/';
import { Input } from '../../components/input';
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

  init(){
    let profileChangeInfoRowBlocksData = [];
    if (window.location.pathname === '/profile-change-data'){
          profileChangeInfoRowBlocksData = [
                                      {type:"text", description:"Почта", name:"email", id:"email", errorMessage:"Неверный адрес почты"},
                                      {type:"text", description:"Логин", name:"login", id:"login", errorMessage:"Неверный Логин"},
                                      {type:"text", description:"Имя", name:"first_name", id:"first_name", errorMessage:"Неверное Имя"},
                                      {type:"text", description:"Фамилия", name:"second_name", id:"second_name", errorMessage:"Неверная Фамилия"},
                                      {type:"text", description:"Имя в чате", name:"display_name", id:"display_name", errorMessage:"Неверное Имя"},
                                      {type:"text", description:"Телефон", name:"phone", id:"phone", errorMessage:"Неверный телефон"}
                                      ];
    }else{
          profileChangeInfoRowBlocksData = [
                                      {type:"password", description:"Старый пароль", name:"oldPassword", id:"oldPassword", errorMessage:"Неверный пароль"},
                                      {type:"password", description:"Новый пароль", name:'newPassword', id:"password", errorMessage:"Некорректный пароль"},
                                      {type:"password", description:"Повторите новый пароль", name:"passwordval", id:"passwordval", errorMessage:"Пароли не совпадают"}
                                      ];
    }

    const profileSidebarBlock = new ProfileSidebarBlock({events:{click: () => router.back()}});
    const profileAvaBlock = new ProfileAvaBlock();
    const profileChangeInfoSaveButton = new Button({url:'userProfile',title:'Сохранить',class:'change-profil-forma-button'});
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
  }

  render() {
    return this.compile(template, this.props);
  }
}


