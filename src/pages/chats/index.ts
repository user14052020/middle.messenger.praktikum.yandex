import Block from '../../utils/Block';
import template from './chats.hbs';

interface ChatsPageProps {
  personName: string;
  fileImg: string;
  toRightAngleSvg: string;
  chatsSearchInput: string;
  chatsMessageInput: string;
  chatsMessageButton: string;
  chatsPersonBlock: string;
  conversationBlock: string;
}

export class ChatsPage extends Block<ChatsPageProps> {
  constructor(props: ChatsPageProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}