import Block from '../../utils/Block';
import template from './profile_sidebar.hbs';
import { PropsWithRouter, withRouter } from '../../hocs/withRouter';

export interface ProfileSidebarBlockProps extends PropsWithRouter{
  events?: {
    click: () => void;
  };
}

class ProfileSidebarBaseBlock extends Block<ProfileSidebarBlockProps> {
  constructor(props: ProfileSidebarBlockProps) {
    super('div', {
      ...props,
      events: {
        click: () => this.props.router.back()
      },
    });
  }

  render() {
    return this.compile(template, { ...this.props});
  }
}

export const ProfileSidebarBlock = withRouter(ProfileSidebarBaseBlock);