import Block from '~/utils/Block';
import template from './authorization_registration_input_block.hbs';
import { Input } from '~/components/input';

interface AuthorizationRegistrationInputBlockProps {
  label: string;
  errorMessage: string;
  authorizationRegistrationInput: Input;
}

export class AuthorizationRegistrationInputBlock extends Block<AuthorizationRegistrationInputBlockProps> {
  constructor(props: AuthorizationRegistrationInputBlockProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}