import Block from '../../utils/Block';
import template from './authorization_registration_input_block.hbs';

interface AuthorizationRegistrationInputBlockProps {
  inputId: string;
  label: string;
  errorMessage: string;
  authorizationRegistrationInput: string;
}

export class AuthorizationRegistrationInputBlock extends Block<AuthorizationRegistrationInputBlockProps> {
  constructor(props: AuthorizationRegistrationInputBlockProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}