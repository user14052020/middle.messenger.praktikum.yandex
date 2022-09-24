import Block from '../../utils/Block';
import template from './modal.hbs';
import { Button } from '../../components/button/';
import { Input } from '../../components/input/';

export interface ModalBlockProps {
  modalId:string;
  formId?:string;
  deleteChatId?:number;
  deleteUserId?:number;
  title:string;
  isFileModal:Boolean;
  input?:Input;
  button:Button[];

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
  const modals = document.getElementsByClassName('profil-modal-overley');
  Array.prototype.forEach.call(modals, function(el:HTMLElement) {
    if (e.target === el) {
      el!.classList.remove("show");
    }
  });
});


