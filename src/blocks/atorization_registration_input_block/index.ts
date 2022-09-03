import Block from '../../utils/Block';
import template from './atorization_registration_input_block.hbs';

interface AtorizationRegistrationInputBlockProps {
  label: string;
  errorMessage: string;
  atorizationRegistrationInput: any;
}

export class AtorizationRegistrationInputBlock extends Block {
  constructor(props: AtorizationRegistrationInputBlockProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}