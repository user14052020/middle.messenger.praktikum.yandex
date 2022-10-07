import Block from '../../utils/Block';
import template from './input.hbs';
import { phoneRGEX,emailRGEX,loginRGEX,nameRGEX,passwordRGEX,messageRGEX } from '../../utils/helpers';
interface InputProps {
  disabled?:string;
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
      (<HTMLInputElement>this.element).placeholder = 'Поле не может быть пустым';
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