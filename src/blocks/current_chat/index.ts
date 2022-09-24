import Block from '../../utils/Block';
import template from './current_chat.hbs';
import {ConversationBlock} from "~src/blocks/conversation";
import {ChatHeaderBlock} from "~src/blocks/chat_header";
import {Input} from "~src/components/input";
import {Button} from "~src/components/button";

interface CurrentChatBlockProps {
    currentChatName?:string,
    conversationBlock?: ConversationBlock[];
    chatMessageInput?: Input;
    chatMessageButton?: Button;
    chatHeaderBlock?:ChatHeaderBlock;
    isNotHidden:boolean;

}

export class CurrentChatBlock extends Block<CurrentChatBlockProps> {
    constructor(props: CurrentChatBlockProps) {
        super('div', props);
    }

    render() {
        return this.compile(template, this.props);
    }
}