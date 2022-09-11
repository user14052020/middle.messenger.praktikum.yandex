import Block from '../../utils/Block';
import template from './chats.hbs';
import { Input } from '../../components/input/';
import { Button } from '../../components/button/';
import { ConversationBlock } from '../../blocks/conversation';
import { ChatsPersonBlock } from '../../blocks/chats_person';

interface ChatsPageProps {
  personName: string;
  toRightAngleSvg: string;
  chatsSearchInput: Input;
  chatsMessageInput: Input;
  chatsMessageButton: Button;
  chatsPersonBlock: ChatsPersonBlock[];
  conversationBlock: ConversationBlock[];
}

export class ChatsPage extends Block<ChatsPageProps> {
  constructor(props: ChatsPageProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}