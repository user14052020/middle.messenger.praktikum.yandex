import Block from '../../utils/Block';
import template from './chats_list_element.hbs';

interface ChatsListElementBlockProps {
  title: string;
  last_message: string;
  unread_count: number;
}

export class ChatsListElementBlock extends Block<ChatsListElementBlockProps> {
  constructor(props: ChatsListElementBlockProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}