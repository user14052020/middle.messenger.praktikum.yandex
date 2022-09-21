import Block from '../../utils/Block';
import template from './profile_ava_change_modal.hbs';
import { Button } from '../../components/button/';

interface ProfileAvaChangeModalBlockProps {
  saveButton:Button;

}

export class ProfileAvaChangeModalBlock extends Block {
  constructor() {
    super('div');

  }
  init() {
    const saveButton = new Button({url:'avatar',class:'profil-modal-form-button', isSendMessageButton: false, title:'Поменять'});
    this.children.saveButton = saveButton;  
  }
  render() {
    return this.compile(template);
  }
}




