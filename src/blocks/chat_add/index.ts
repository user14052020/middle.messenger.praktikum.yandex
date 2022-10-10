import Block from '~/utils/Block';
import template from './chat_add.hbs';

interface ChatAddBlockProps {
  events?: {
    click: () => void;

  };
}

export class ChatAddBlock extends Block<ChatAddBlockProps> {
  constructor(props: ChatAddBlockProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}