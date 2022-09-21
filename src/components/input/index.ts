import Block from '../../utils/Block';
import template from './input.hbs';

interface InputProps {
  class?: string;
  type: string;
  name: string;
  inputId: string;
  placeholder?: string;
  events?: {
    focus: () => void;
    blur: () => void;
  };
}

export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super('input', props);
    this.props.events = {
        focus: () => this.validate(),blur: () => this.validate(),
      }
  }

  render() {
    return this.compile(template, this.props);
  }

  validate(){
    let inputValue = (<HTMLInputElement>this.element).value ;
    let inputId = (<HTMLInputElement>this.element).id;
    let phoneRGEX = /^[+0-9][0-9]{9,14}$/;
    let emailRGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let loginRGEX = /^[a-zA-Z][a-zA-Z0-9-_]{2,20}$/;
    let nameRGEX = /^[A-ZА-ЯЁ][ёa-zа-я-]{1,20}$/;
    let passwordRGEX = /(?=^.{8,40}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    let messageRGEX = /^\s*$/;
    let result = false;
    const passwordInputNames = ['password', 'passwordold','oldPassword','newPassword'];
    const namesInput = ['first_name', 'second_name','chat_name'];
    if(inputId === 'email'){
      result = emailRGEX.test(inputValue);
    }else if(inputId === 'phone'){
      result = phoneRGEX.test(inputValue);
    }else if(inputId === 'login'){
      result = loginRGEX.test(inputValue);
    }else if(passwordInputNames.includes(inputId)){
      result = passwordRGEX.test(inputValue);
    }else if(namesInput.includes(inputId)){
      result = nameRGEX.test(inputValue);
    }else if(inputId === 'passwordval'){
      let password = (<HTMLInputElement>document.getElementById('password')).value;
      if(inputValue !== password){
        result = false;
      }else{
        result = true;
      }
    }else if(this.element?.id === 'message'|| this.element?.id === 'chatsSearchInput'){
      result = !messageRGEX.test(inputValue);
    }else{
      result = true;
    }

    let nextSibling = this.element?.nextSibling;
    while(nextSibling && typeof (<HTMLElement>nextSibling).classList === 'undefined' || nextSibling && (<HTMLElement>nextSibling).classList.contains('warn') === false) {
        nextSibling = nextSibling.nextSibling;
    }
    if (!nextSibling){
      (<HTMLInputElement>this.element).placeholder = 'Сообщение не может быть пустым';
    }else{
      if(result === false){
        (<HTMLElement>nextSibling).style.opacity = '1';
      }else{
       (<HTMLElement>nextSibling).style.opacity = '0'; 
      }
    }


    return result;
  }
}