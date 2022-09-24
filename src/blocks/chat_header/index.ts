import Block from '../../utils/Block';
import template from './chat_header.hbs';


interface ChatHeaderBlockProps {
    currentChatName?:string,
    events?: {
        click: () => void;

    };
}

export class ChatHeaderBlock extends Block<ChatHeaderBlockProps> {
    constructor(props: ChatHeaderBlockProps) {
        super('div', props);
    }

    render() {
        return this.compile(template, this.props);
    }
}