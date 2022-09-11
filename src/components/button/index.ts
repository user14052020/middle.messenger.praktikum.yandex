import Block from '../../utils/Block';
import template from './button.hbs';

interface ButtonProps {
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
        click: () => this.validate(event as Event)
      }
  }

  render() {
    return this.compile(template, this.props);
  }
  validate(event:Event) {
    event.preventDefault(); 
    const formsIds = ['auth-reg-form','message-form','profile-data-form'];
    const forms = document.getElementsByTagName('form');
    for (const form of forms) {
      if (formsIds.includes(form.id)){
        let formData = new FormData();
        Array.from(form.elements).forEach((element:HTMLInputElement) => {
          if(element.tagName === "INPUT"){
            let elementName = element.name;
            let elementValue = element.value;
            formData.set(elementName,elementValue);
            element.focus();
          }
        });
        let obj:Record<string,string> = {};
        for (let key of formData.keys()) {
          obj[key] = formData.get(key) as string;
        }
        console.log(obj);
      }
    }
  }
}