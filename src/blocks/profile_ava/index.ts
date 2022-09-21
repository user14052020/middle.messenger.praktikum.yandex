import Block from '../../utils/Block';
import template from './profile_ava.hbs';

interface ProfileAvaBlockProps {
  hasAvatar:boolean;
  avatarFileLink?:string;
  events?: {
    click: () => void;
  };
}

export class ProfileAvaBlock extends Block<ProfileAvaBlockProps>  {
  constructor(props: ProfileAvaBlockProps) {
    super('div',props);
    this.props.events = {
        click: () => showAvaModal()
      }
  }

  render() {
    return this.compile(template, this.props);
  }
}

function showAvaModal() {
  const modalProfileAvaChange = document.querySelector('.profil-modal-overley');

  if (modalProfileAvaChange.classList.contains('_show')) {
    modalProfileAvaChange.classList.remove("_show");
  }else{
    modalProfileAvaChange.classList.add("_show");
  }
}

document.addEventListener('click', function (e) {
  const modalProfileAvaChange = document.querySelector('.profil-modal-overley');
    if (e.target === modalProfileAvaChange) {
      modalProfileAvaChange.classList.remove("_show");
    }
});
