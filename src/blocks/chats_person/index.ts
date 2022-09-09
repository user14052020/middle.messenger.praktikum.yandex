import Block from '../../utils/Block';
import template from './chats_person.hbs';

interface ChatsPersonBlockProps {
  personName: string;
  messageText: string;
  messageDate: string;
  unreadedMessageAmount: number;
}

export class ChatsPersonBlock extends Block<ChatsPersonBlockProps> {
  constructor(props: ChatsPersonBlockProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}