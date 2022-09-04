import Block from '../../utils/Block';
import template from './error.hbs';

interface ErrorPageProps {
  errorCode: string;
  errorMessage: string;
}

export class ErrorPage extends Block {
  constructor(props: ErrorPageProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}