import Block from '../../utils/Block';
import template from './profile_ava.hbs';
import { showModal } from '../../utils/helpers';

interface ProfileAvaBlockProps {
  hasAvatar:boolean;
  avatarFileLink?:string;
  events?: {
    click: () => void;
  };
}

export class ProfileAvaBlock extends Block<ProfileAvaBlockProps>  {
  constructor(props: ProfileAvaBlockProps) {
    super('div', props);
    this.props.events = {
        click: () => showModal()
      }
  }

  render() {
    return this.compile(template, this.props);
  }
}




