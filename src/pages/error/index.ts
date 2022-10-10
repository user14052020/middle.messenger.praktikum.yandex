import Block from '~/utils/Block';
import template from './error.hbs';

interface ErrorPageProps {
  errorCode: string;
  errorMessage: string;
}

export class ErrorPage extends Block<ErrorPageProps> {
  constructor(props: ErrorPageProps) {
    super('div', props);
  }

  init() {
    if(window.location.pathname === '/404'){
      this.props.errorCode = '404';
      this.props.errorMessage = 'Не туда попали';
    }else{
      this.props.errorCode = '500';
      this.props.errorMessage = 'Уже чиним';
    }
  }

  render() {
    return this.compile(template, this.props);
  }
}