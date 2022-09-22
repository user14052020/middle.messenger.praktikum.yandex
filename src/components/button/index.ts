import Block from '../../utils/Block';
import template from './button.hbs';
import {Options} from '../../utils/HTTPTransport';

import AuthController from '../../controllers/AuthController';
import UserController from '../../controllers/UserController';

interface ButtonProps {
  url?: string;
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
    
    event.preventDefault();
    let options:Options = {}
    let data:Record<string,string> = {};
    if (url==='avatar'){
      const changeAvaForm = document.getElementById('change-avatar-modal') as HTMLFormElement;
      const formData = new FormData(changeAvaForm);
      options['data'] = formData;
      console.log(options);
      UserController.avatar(options);

      const modalProfileAvaChange = document.querySelector('.profil-modal-overley');
      modalProfileAvaChange!.classList.remove("show");

    }else{
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
          const warns = Array.from(document.getElementsByClassName('warn') as HTMLCollectionOf<HTMLElement>);
          for (let warn of warns) {
            if (warn.style.opacity === '1'){
              hasErrors = true;
            }

          }
          if(hasErrors){
            console.log('Пожалуйста исправьте ошибки');
          }else{
            for (let key of formData.keys()) {
              data[key] = formData.get(key) as string;
            }
            options['headers'] = {'Content-Type': 'application/json'};
            options['data'] = data;
            console.log(options);
            if(url === 'signUp'){
              AuthController.signup(options as Options);
            }else if (url === 'signIn'){
              AuthController.signin(options as Options);
            }else if (url === 'userProfile'){
              UserController.profile(options as Options);
            }else if (url === 'userPassword'){
              UserController.password(options as Options);
            }
          }    
        }
      }
    }
  }
}