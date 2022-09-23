import Block from '../../utils/Block';
import template from './modal.hbs';
import { Button } from '../../components/button/';
import { Input } from '../../components/input/';

export interface ModalBlockProps {
  formId:string;
  title:string;
  isFileModal:Boolean;
  input?:Input;
  button:Button;

}

export class ModalBlock extends Block<ModalBlockProps> {
  constructor(props:ModalBlockProps) {
    super('div', props);

  }

  render() {
    return this.compile(template,this.props);
  }
}

document.addEventListener('click', function (e) {
  const modal = document.querySelector('.profil-modal-overley');
  if (e.target === modal) {
    modal!.classList.remove("show");
  }
});


