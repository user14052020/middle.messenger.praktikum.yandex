import Block from '../../utils/Block';
import template from './profile_ava.hbs';

interface ProfileAvaBlockProps {

}

export class ProfileAvaBlock extends Block {
  constructor(props: ProfileAvaBlockProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}