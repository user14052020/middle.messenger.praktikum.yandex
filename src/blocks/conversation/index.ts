import Block from '../../utils/Block';
import template from './conversation.hbs';

interface ConversationBlockProps {

    date: string;
    messages: string;

}

export class ConversationBlock extends Block {
  constructor(props: ConversationBlockProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}