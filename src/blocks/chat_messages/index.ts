import Block from '../../utils/Block';
import template from './chat_messages.hbs';

interface ChatMessagesBlockProps {

  type: string;
  time: string;
  text: string;
    
}

export class ChatMessagesBlock extends Block {
  constructor(props: ChatMessagesBlockProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}