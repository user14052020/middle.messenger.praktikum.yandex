import Block from '~/utils/Block';
import template from './conversation.hbs';

interface ConversationBlockProps {

    date: string;
    messages: Record<string, any>;

}

export class ConversationBlock extends Block<ConversationBlockProps> {
  constructor(props: ConversationBlockProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}