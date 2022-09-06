import Block from '../../utils/Block';
import template from './button.hbs';

interface ButtonProps {
  isSendMessageButton: boolean;
  type: string;
  id: string;
  events: {
    click: () => void;

  };
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super('button', props);
    this.props.events = {
        click: () => this.validate(event)
      }
  }

  render() {
    return this.compile(template, this.props);
  }
  validate(event) {
    const regFormData = {
      isHuman: false,
  
    };
    event.preventDefault(); 
    const formsIds = ['auth_reg_form','mess_forma','profile_data'];
    const forms = document.getElementsByTagName('form');
    for (const form of forms) {
      if (formsIds.includes(form.id)){
        let formData = new FormData();
        Array.from(form.elements).forEach(element => {
          if(element.tagName === "INPUT"){
            let elementName = element.name;
            let elementValue = element.value;
            formData.set(elementName,elementValue);
            element.focus();
          }
        });
        var obj = {};
        for (var key of formData.keys()) {
          obj[key] = formData.get(key);
        }
        console.log(obj);
      }
    }
  }
}