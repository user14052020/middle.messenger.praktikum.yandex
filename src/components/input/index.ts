import Block from '../../utils/Block';
import template from './input.hbs';

interface InputProps {
  label: string;
  type: string;
  id: string;
  events: {
    focus: () => void;
  };
}

export class Input extends Block {
  constructor(props: InputProps) {
    super('input', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}