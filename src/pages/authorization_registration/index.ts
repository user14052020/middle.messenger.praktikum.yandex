import Block from '../../utils/Block';
import template from './authorization_registration.hbs';
import { AuthorizationRegistrationInputBlock } from '../../blocks/authorization_registration_input_block/';
import { Input } from '../../components/input/';
import { Button } from '../../components/button/';


interface AuthorizationRegistrationPageProps {
  title: string;
  regAuthLinkTitle: string;
  regAuthLink: string;
  isRegistration?: boolean;
  regAuthButton: Button;

}

export class AuthorizationRegistrationPage extends Block<AuthorizationRegistrationPageProps> {
  constructor(props: AuthorizationRegistrationPageProps) {
    super('div', props);
  }

  init() {
    
    if (window.location.pathname === '/sign-up'){
      const authButton = new Button({url:'signUp',class:'auth-reg-form-button', isSendMessageButton: false, title:'Зарегистрироваться'});
      this.children.regAuthButton = authButton; 
      this.props.regAuthLinkTitle = 'Войти'; 
      this.props.regAuthLink = '/';
      this.props.title = 'Регистрация'; 
      this.props.isRegistration = true; 
      const loginInput = new Input({class:'auth-reg-form-input', type:'text', name:'login', inputId:'login'});
      const passwordInput = new Input({class:'auth-reg-form-input', type:'password', name:'password', inputId:'password'});
      const passwordValInput = new Input({class:'auth-reg-form-input', type:'password', name:'passwordval', inputId:'passwordval'});
      const emailInput = new Input({class:'auth-reg-form-input', type:'text', name:'email', inputId:'email'});
      const nameInput = new Input({class:'auth-reg-form-input', type:'text', name:'first_name', inputId:'first_name'});
      const secondnameInput = new Input({class:'auth-reg-form-input', type:'text', name:'second_name', inputId:'second_name'});
      const phoneInput = new Input({class:'auth-reg-form-input', type:'text', name:'phone', inputId:'phone'});

      this.children.authorizationRegistrationEmailInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Почта', errorMessage:'Некорректный адрес почты', authorizationRegistrationInput: emailInput
      });
      this.children.authorizationRegistrationLoginInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Логин', errorMessage:'Некорректный логин', authorizationRegistrationInput: loginInput
      });
      this.children.authorizationRegistrationNameInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Имя', errorMessage:'Некорректное имя', authorizationRegistrationInput: nameInput
      });
      this.children.authorizationRegistrationSecondnameInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Фамилия', errorMessage:'Некорректная фамилия', authorizationRegistrationInput: secondnameInput
      });
      this.children.authorizationRegistrationPhoneInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Телефон', errorMessage:'Некорректный телефон',authorizationRegistrationInput: phoneInput
      });  
      this.children.authorizationRegistrationPasswordInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Пароль', errorMessage:'Некорректный пароль', authorizationRegistrationInput: passwordInput
      }); 
      this.children.authorizationRegistrationPasswordValInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Пароль (ещё раз)', errorMessage:'Пароли не совпадают', authorizationRegistrationInput: passwordValInput
      });
             
    }else{
      this.props.title = 'Вход';
      this.props.regAuthLinkTitle = 'Нет аккаунта?';
      this.props.regAuthLink = 'sign-up';
      const loginButton = new Button({url:'signIn', class:'auth-reg-form-button', isSendMessageButton: false, title:'Авторизоваться'});
      const loginInput = new Input({class:'auth-reg-form-input', type:'text',name:'login', inputId:'login'});
      const passwordInput = new Input({class:'auth-reg-form-input', type:'password',name:'password', inputId:'password'});
      this.children.regAuthButton = loginButton;
      this.children.authorizationRegistrationLoginInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Логин', errorMessage:'Неверный логин или пароль', authorizationRegistrationInput: loginInput,
      });
      this.children.authorizationRegistrationPasswordInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Пароль', errorMessage:'Неверный логин или пароль', authorizationRegistrationInput: passwordInput
      });
    }
  }

  render() {
    return this.compile(template, this.props);
  }
}