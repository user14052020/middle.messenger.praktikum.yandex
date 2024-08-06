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
      const authButton = new Button({
        formId:'auth-reg-form',url:'signUp',class:'auth-reg-form-button', isSendMessageButton: false, title:'Register'
      });
      this.children.regAuthButton = authButton; 
      this.props.regAuthLinkTitle = 'Log in'; 
      this.props.regAuthLink = '/';
      this.props.title = 'Registration'; 
      this.props.isRegistration = true;

      const loginInput = new Input({
        class:'auth-reg-form-input', type:'text', name:'login', inputId:'login'
      });

      const passwordInput = new Input({
        class:'auth-reg-form-input', type:'password', name:'password', inputId:'password'
      });

      const passwordValInput = new Input({
        class:'auth-reg-form-input', type:'password', name:'passwordval', inputId:'passwordval'
      });

      const emailInput = new Input({
        class:'auth-reg-form-input', type:'text', name:'email', inputId:'email'
      });

      const nameInput = new Input({
        class:'auth-reg-form-input', type:'text', name:'first_name', inputId:'first_name'
      });

      const secondnameInput = new Input({
        class:'auth-reg-form-input', type:'text', name:'second_name', inputId:'second_name'
      });

      const phoneInput = new Input({
        class:'auth-reg-form-input', type:'text', name:'phone', inputId:'phone'
      });

      this.children.authorizationRegistrationEmailInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Mail', errorMessage:'Invalid email address', authorizationRegistrationInput: emailInput
      });

      this.children.authorizationRegistrationLoginInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Login', errorMessage:'Invalid login', authorizationRegistrationInput: loginInput
      });

      this.children.authorizationRegistrationNameInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Name', errorMessage:'Invalid name', authorizationRegistrationInput: nameInput
      });

      this.children.authorizationRegistrationSecondnameInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Surname', errorMessage:'Incorrect last name', authorizationRegistrationInput: secondnameInput
      });

      this.children.authorizationRegistrationPhoneInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Telephone', errorMessage:'Incorrect phone number',authorizationRegistrationInput: phoneInput
      });

      this.children.authorizationRegistrationPasswordInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Password', errorMessage:'Invalid password', authorizationRegistrationInput: passwordInput
      });

      this.children.authorizationRegistrationPasswordValInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Password (again)', errorMessage:'Passwords don`t match', authorizationRegistrationInput: passwordValInput
      });
             
    }else{
      this.props.title = 'Log In';
      this.props.regAuthLinkTitle = 'No account?';
      this.props.regAuthLink = 'sign-up';

      const loginButton = new Button({
        formId:'auth-reg-form',url:'signIn', class:'auth-reg-form-button', isSendMessageButton: false, title:'Log in'
      });

      const loginInput = new Input({
        class:'auth-reg-form-input', type:'text',name:'login', inputId:'login'
      });

      const passwordInput = new Input({
        class:'auth-reg-form-input', type:'password',name:'password', inputId:'password'
      });

      this.children.regAuthButton = loginButton;

      this.children.authorizationRegistrationLoginInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Login', errorMessage:'Invalid username or password', authorizationRegistrationInput: loginInput,
      });

      this.children.authorizationRegistrationPasswordInputBlock = new AuthorizationRegistrationInputBlock({
        label:'Password', errorMessage:'Invalid username or password', authorizationRegistrationInput: passwordInput
      });
    }
  }

  render() {
    return this.compile(template, this.props);
  }
}
