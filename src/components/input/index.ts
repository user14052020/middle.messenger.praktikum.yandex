import Block from '../../utils/Block';
import template from './input.hbs';

interface InputProps {
  type: string;
  inputId: string;
  placeholder: string;
  events: {
    focus: () => void;
    blur: () => void;
  };
}

export class Input extends Block {
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
    let value = this.element?.value ;
    let phoneRGEX = /^[+0-9][0-9]{9,14}$/;
    let emailRGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let loginRGEX = /^[a-zA-Z][a-zA-Z0-9-_]{2,20}$/;
    let nameRGEX = /^[A-ZА-ЯЁ][ёa-zа-я-]$/;
    let passwordRGEX = /(?=^.{8,40}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    let messageRGEX = /^\s*$/;
    let result = false;

    if(this.element?.id === 'email'){
      result = emailRGEX.test(value);
    }else if(this.element?.id === 'phone'){
      result = phoneRGEX.test(value);
    }else if(this.element?.id === 'login'){
      result = loginRGEX.test(value);
    }else if(this.element?.id === 'password'){
      result = passwordRGEX.test(value);
    }else if(this.element?.id === 'first_name' || this.element?.id === 'second_name'){
      result = nameRGEX.test(value);
    }else if(this.element?.id === 'passwordval'){
      password = document.getElementById('password').value;
      if(this.element?.value !== password){
        result = false;
      }else{
        result = true;
      }
    }else if(this.element?.id === 'mess'|| this.element?.id === 'chatsSearchInput'){
      result = messageRGEX.test(value);
    }else{
      result = true;
    }

    let nextSibling = this.element?.nextSibling;
    while(nextSibling && typeof nextSibling.classList === 'undefined' || nextSibling && nextSibling.classList.contains('warn') === false) {
        nextSibling = nextSibling.nextSibling;
    }
    if (!nextSibling){
      console.log("Нет поля для вывода сообщения валидации.");
    }else{
      if(result === false){
        nextSibling.style.opacity = 1;
      }else{
       nextSibling.style.opacity = 0; 
      }
    }


    return result;
  }
}