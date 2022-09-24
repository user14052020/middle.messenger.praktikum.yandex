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
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}




