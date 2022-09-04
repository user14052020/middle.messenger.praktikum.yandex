import Block from '../../utils/Block';
import template from './button.hbs';

interface ButtonProps {
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
    event.preventDefault(); 
    console.log("test");
  }
}