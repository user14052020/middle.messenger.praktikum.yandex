import Block from '../../utils/Block';
import template from './authorization_registration.hbs';
import { AuthorizationRegistrationInputBlock } from '../../blocks/authorization_registration_input_block/';
import { Input } from '../../components/input/';


interface AuthorizationRegistrationPageProps {
  title: string;
  regAuthButtonTitle: string;
  regAuthLinkTitle: string;
  regAuthLink: string;
  isRegistration: boolean;
  regAuthButton: string;

}

export class AuthorizationRegistrationPage extends Block<AuthorizationRegistrationPageProps> {
  constructor(props: AuthorizationRegistrationPageProps) {
    super('div', props);
  }

  init() {
    
    if (this.props.isRegistration){
      const loginInput = new Input({class:'auth-reg-form-input', type:'text', inputId:'login'});
      const passwordInput = new Input({class:'auth-reg-form-input', type:'password', inputId:'password'});
      const passwordValInput = new Input({class:'auth-reg-form-input', type:'password', inputId:'passwordval'});
      const emailInput = new Input({class:'auth-reg-form-input', type:'text', inputId:'email'});
      const nameInput = new Input({class:'auth-reg-form-input', type:'text', inputId:'first_name'});
      const secondnameInput = new Input({class:'auth-reg-form-input', type:'text', inputId:'second_name'});
      const phoneInput = new Input({class:'auth-reg-form-input', type:'text', inputId:'phone'});

      this.children.authorizationRegistrationEmailInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Почта', inputId:'email', errorMessage:'Некорректный адрес почты', authorizationRegistrationInput: emailInput
      });
      this.children.authorizationRegistrationLoginInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Логин', inputId:'login', errorMessage:'Некорректный логин', authorizationRegistrationInput: loginInput
      });
      this.children.authorizationRegistrationNameInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Имя', inputId:'first_name', errorMessage:'Некорректное имя', authorizationRegistrationInput: nameInput
      });
      this.children.authorizationRegistrationSecondnameInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Фамилия', inputId:'second_name', errorMessage:'Некорректная фамилия', authorizationRegistrationInput: secondnameInput
      });
      this.children.authorizationRegistrationPhoneInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Телефон', inputId:'phone', errorMessage:'Некорректный телефон',authorizationRegistrationInput: phoneInput
      });  
      this.children.authorizationRegistrationPasswordInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Пароль', inputId:'password', errorMessage:'Некорректный пароль', authorizationRegistrationInput: passwordInput
      }); 
      this.children.authorizationRegistrationPasswordValInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Пароль (ещё раз)', inputId:'passwordval', errorMessage:'Пароли не совпадают', authorizationRegistrationInput: passwordValInput
      });
             
    }else{
      const loginInput = new Input({class:'auth-reg-form-input', type:'text',inputId:'login'});
      const passwordInput = new Input({class:'auth-reg-form-input', type:'password',inputId:'password'});
      this.children.authorizationRegistrationLoginInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Логин', inputId:'login', errorMessage:'Неверный логин или пароль', authorizationRegistrationInput: loginInput,
      });
      this.children.authorizationRegistrationPasswordInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Пароль', inputId:'password', errorMessage:'Неверный логин или пароль', authorizationRegistrationInput: passwordInput
      });
    }

  }

  render() {
    return this.compile(template, this.props);
  }
}