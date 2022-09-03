import Block from '../../utils/Block';
import template from './atorization_registration.hbs';
import { AtorizationRegistrationInputBlock } from '../../blocks/atorization_registration_input_block/';
import { Input } from '../../components/input/';

interface AtorizationRegistrationProps {
  title: string;
  regAuthButtonTitle: string;
  regAuthLinkTitle: string;
  regAuthLink: string;
  isRegistration: boolean;
}

export class AtorizationRegistration extends Block {
  constructor(props: AtorizationRegistrationProps) {
    super('div', props);
  }

  init() {
    if (this.props.isRegistration){
      const loginInput = new Input({label:'Логин', type:'text',inputId:'username',events: {
        focus: () => console.log('focus'),
      }});
      const passwordInput = new Input({label:'Пароль', type:'password',inputId:'password',events: {
        focus: () => console.log('focus'),
      }});
      const passwordValInput = new Input({label:'Пароль (ещё раз)', type:'password',inputId:'passwordval',events: {
        focus: () => console.log('focus'),
      }});
      const emailInput = new Input({label:'Почта', type:'text',inputId:'email',events: {
        focus: () => console.log('focus'),
      }});
      const nameInput = new Input({label:'Имя', type:'text',inputId:'name',events: {
        focus: () => console.log('focus'),
      }});
      const secondnameInput = new Input({label:'Фамилия', type:'text',inputId:'secondname',events: {
        focus: () => console.log('focus'),
      }});
      const phoneInput = new Input({label:'Телефон', type:'text',inputId:'phone',events: {
        focus: () => console.log('focus'),
      }});
      this.children.atorizationRegistrationEmailInputBlock = new AtorizationRegistrationInputBlock({
        label:'Почта', inputId:'email', errorMessage:'Неверный адрес почты',atorizationRegistrationInput: emailInput
      });
      this.children.atorizationRegistrationLoginInputBlock = new AtorizationRegistrationInputBlock({
        label:'Логин', inputId:'username', errorMessage:'Неверный логин',atorizationRegistrationInput: loginInput
      });
      this.children.atorizationRegistrationNameInputBlock = new AtorizationRegistrationInputBlock({
        label:'Имя', inputId:'name', errorMessage:'Неверное Имя',atorizationRegistrationInput: nameInput
      });
      this.children.atorizationRegistrationSecondNameInputBlock = new AtorizationRegistrationInputBlock({
        label:'Фамилия', inputId:'secondname', errorMessage:'Неверная Фамилия',atorizationRegistrationInput: secondnameInput
      });
      this.children.atorizationRegistrationPhoneInputBlock = new AtorizationRegistrationInputBlock({
        label:'Телефон', inputId:'phone', errorMessage:'Неверный Телефон',atorizationRegistrationInput: phoneInput
      });  
      this.children.atorizationRegistrationPasswordInputBlock = new AtorizationRegistrationInputBlock({
        label:'Пароль', inputId:'password', errorMessage:'Пароли не совпадают',atorizationRegistrationInput: passwordInput
      }); 
      this.children.atorizationRegistrationPasswordValInputBlock = new AtorizationRegistrationInputBlock({
        label:'Пароль (ещё раз)', inputId:'passwordval', errorMessage:'Пароли не совпадают',atorizationRegistrationInput: passwordValInput
      });               
    }else{
      const loginInput = new Input({label:'Логин', type:'text',inputId:'username',events: {
        focus: () => console.log('focus'),
      }});
      const passwordInput = new Input({label:'Пароль', type:'password',inputId:'password',events: {
        focus: () => console.log('focus'),
      }});
      this.children.atorizationRegistrationLoginInputBlock = new AtorizationRegistrationInputBlock({
        label:'Логин', inputId:'username', errorMessage:'Неверный логин', atorizationRegistrationInput: loginInput,
      });
      this.children.atorizationRegistrationPasswordInputBlock = new AtorizationRegistrationInputBlock({
        label:'Пароль', inputId:'password', errorMessage:'Неверный пароль', atorizationRegistrationInput: passwordInput
      });
    }

  }

  render() {
    return this.compile(template, this.props);
  }
}