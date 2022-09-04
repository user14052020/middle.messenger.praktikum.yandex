import Block from '../../utils/Block';
import template from './atorization_registration.hbs';
import { AtorizationRegistrationInputBlock } from '../../blocks/atorization_registration_input_block/';
import { Input } from '../../components/input/';


interface AtorizationRegistrationPageProps {
  title: string;
  regAuthButtonTitle: string;
  regAuthLinkTitle: string;
  regAuthLink: string;
  isRegistration: boolean;
  regAuthButton: string;

}

export class AtorizationRegistrationPage extends Block {
  constructor(props: AtorizationRegistrationPageProps) {
    super('div', props);
  }

  init() {
    if (this.props.isRegistration){
      const loginInput = new Input({type:'text', inputId:'login'});
      const passwordInput = new Input({type:'password', inputId:'password'});
      const passwordValInput = new Input({type:'password', inputId:'passwordval'});
      const emailInput = new Input({type:'text', inputId:'email'});
      const nameInput = new Input({type:'text', inputId:'first_name'});
      const secondnameInput = new Input({type:'text', inputId:'second_name'});
      const phoneInput = new Input({type:'text', inputId:'phone'});

      this.children.atorizationRegistrationEmailInputBlock = new AtorizationRegistrationInputBlock({
        label:'Почта', inputId:'email', errorMessage:'Некорректный адрес почты', atorizationRegistrationInput: emailInput
      });
      this.children.atorizationRegistrationLoginInputBlock = new AtorizationRegistrationInputBlock({
        label:'Логин', inputId:'login', errorMessage:'Некорректный логин', atorizationRegistrationInput: loginInput
      });
      this.children.atorizationRegistrationNameInputBlock = new AtorizationRegistrationInputBlock({
        label:'Имя', inputId:'first_name', errorMessage:'Некорректное имя', atorizationRegistrationInput: nameInput
      });
      this.children.atorizationRegistrationSecondnameInputBlock = new AtorizationRegistrationInputBlock({
        label:'Фамилия', inputId:'second_name', errorMessage:'Некорректная фамилия', atorizationRegistrationInput: secondnameInput
      });
      this.children.atorizationRegistrationPhoneInputBlock = new AtorizationRegistrationInputBlock({
        label:'Телефон', inputId:'phone', errorMessage:'Некорректный телефон',atorizationRegistrationInput: phoneInput
      });  
      this.children.atorizationRegistrationPasswordInputBlock = new AtorizationRegistrationInputBlock({
        label:'Пароль', inputId:'password', errorMessage:'Некорректный пароль', atorizationRegistrationInput: passwordInput
      }); 
      this.children.atorizationRegistrationPasswordValInputBlock = new AtorizationRegistrationInputBlock({
        label:'Пароль (ещё раз)', inputId:'passwordval', errorMessage:'Пароли не совпадают', atorizationRegistrationInput: passwordValInput
      });
             
    }else{
      const loginInput = new Input({type:'text',inputId:'login'});
      const passwordInput = new Input({type:'password',inputId:'password'});
      this.children.atorizationRegistrationLoginInputBlock = new AtorizationRegistrationInputBlock({
        label:'Логин', inputId:'login', errorMessage:'Неверный логин или пароль', atorizationRegistrationInput: loginInput,
      });
      this.children.atorizationRegistrationPasswordInputBlock = new AtorizationRegistrationInputBlock({
        label:'Пароль', inputId:'password', errorMessage:'Неверный логин или пароль', atorizationRegistrationInput: passwordInput
      });
    }

  }

  render() {
    return this.compile(template, this.props);
  }
}