import Block from '../../utils/Block';
import template from './profile_change_info_row.hbs';

interface ProfileChangeInfoRowBlockProps {
  description: string;
  errorMessage: string;
  labelFor:string;
  profileChangeInfoRowInput: string;
}

export class ProfileChangeInfoRowBlock extends Block {
  constructor(props: ProfileChangeRowBlockProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}