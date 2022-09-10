import Block from '../../utils/Block';
import template from './profile_change_info_row.hbs';
import { Input } from '../../components/input';

interface ProfileChangeInfoRowBlockProps {
  description: string;
  errorMessage: string;
  labelFor:string;
  profileChangeInfoRowInput: Input;
}

export class ProfileChangeInfoRowBlock extends Block<ProfileChangeInfoRowBlockProps> {
  constructor(props: ProfileChangeInfoRowBlockProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}