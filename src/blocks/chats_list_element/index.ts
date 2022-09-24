import Block from '../../utils/Block';
import template from './chats_list_element.hbs';

interface ChatsListElementBlockProps {
  chatId: number;
  title: string;
  time?:string;
  last_message: string;
  unread_count?: number;
  events:{
    click: () => void;
  }
}

export class ChatsListElementBlock extends Block<ChatsListElementBlockProps> {
  constructor(props: ChatsListElementBlockProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}