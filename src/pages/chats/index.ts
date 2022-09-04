import Block from '../../utils/Block';
import template from './chats.hbs';

interface ChatsPageProps {
  fileImg: string;
  toRightAngleSvg: string;
  chatsSearchInput: string;
  chatsMessageInput: string;
  chatsPersonBlock: string;
  conversationBlock: string;
}

export class ChatsPage extends Block {
  constructor(props: ChatsPageProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}