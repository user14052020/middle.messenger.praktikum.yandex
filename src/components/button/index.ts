import Block from '../../utils/Block';
import template from './button.hbs';
import { SignupData } from '../../api/AuthAPI';
import { UserChange } from '../../api/UserAPI';
import AuthController from '../../controllers/AuthController';
import UserController from '../../controllers/UserController';

interface ButtonProps {
  url: string;
  isSendMessageButton?: boolean;
  class?: string;
  title?: string;
  events?: {
    click: () => void;

  };
}

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super('button', props);
    this.props.events = {
        click: () => this.validate(event as Event,this.props.url as string)
      }
  }

  render() {
    return this.compile(template, this.props);
  }
  validate(event:Event, url:string) {
    console.log(url);
    event.preventDefault(); 
    const formsIds = ['auth-reg-form','message-form','profile-data-form'];
    const forms = document.getElementsByTagName('form');
    for (const form of forms) {
      if (formsIds.includes(form.id)){
        let formData = new FormData();
        Array.from(form.elements).forEach((element:HTMLInputElement) => {
          if(element.tagName === "INPUT" && element.name!== 'passwordval'){
            let elementName = element.name;
            let elementValue = element.value;
            formData.set(elementName,elementValue);
            element.focus();
          }
        });
        let hasErrors = false;
        const warns = document.getElementsByClassName('warn');
        for (const warn of warns) {
          if (warn.style.opacity === '1'){
            hasErrors = true;
          }

        }
        console.log(hasErrors,url);
        if(hasErrors){
          console.log('Пожалуйста исправьте ошибки');
        }else{
          let obj:Record<string,string> = {};
          let data:Record<string,string> = {};
          for (let key of formData.keys()) {
            data[key] = formData.get(key) as string;
          }
          
          obj['data'] = data;
          console.log(obj);
          if(url === 'signUp'){
            AuthController.signup(obj as SignupData);
          }else if (url === 'signIn'){
            AuthController.signin(obj as SignupData);
          }else if (url === 'userProfile'){
            UserController.profile(obj as UserChange);
          }
        }

        
      }
    }
  }
}