import Block from '../../utils/Block';
import template from './chats.hbs';
import { Input } from '../../components/input/';
import { Button } from '../../components/button/';
import { ConversationBlock } from '../../blocks/conversation';
import { ChatsListElementBlock } from '../../blocks/chats_list_element';
import { ChatAddBlock } from '../../blocks/chat_add';
import UserController from '../../controllers/UserController';
import { createChatRequestData } from '../../api/ChatsAPI';
import store, { withStore } from '../../utils/Store';

interface ChatsPageProps {
  personName: string;
  toRightAngleSvg: string;
  chatsSearchInput: Input;
  chatsMessageInput: Input;
  chatsMessageButton: Button;
  chatsListBlocks: chatsListElementBlock[];
  conversationBlock: ConversationBlock[];
  chatAddBlock: ChatAddBlock;
}

export class ChatsPageBase extends Block<ChatsPageProps> {
  constructor(props: ChatsPageProps) {
    super('div', props);
  }

  init(){
    

    
    const storeData = store.getState();
   
    let conversationBlocks:ConversationBlock[] = [];
   
    let chatsListBlocks:chatsListElementBlock[] = [];

    if (Object.keys(storeData).length !== 0 ){
      if(typeof storeData.chats !== 'undefined'){
        storeData.chats.forEach((data) => {
          let chatsListElementBlock = new ChatsListElementBlock({ 
                                    title: data.title, 
                                    last_message: data.last_message, 
                                    unread_count:data.unread_count
                                  });
          chatsListBlocks.push(chatsListElementBlock);  
        });
      }
    }

    this.children.chatsListBlocks = chatsListBlocks;

    this.children.chatsSearchInput = new Input({class:'chat-forma-search-input',placeholder:'Поиск',name:'chatsSearchInput', inputId:'chatsSearchInput',type:'text'});
    this.children.chatsMessageInput = new Input({placeholder:'Сообщение',name:'message',inputId:'message',type:'text'});
    this.children.chatsMessageButton = new Button({isSendMessageButton: true});
    
    this.children.chatAddBlock = new ChatAddBlock({events:{click:() => UserController.createChat()}});

  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidUpdate(){
    let chatsListBlocks:ChatsListElementBlock[] = [];
    
    for (const [key, value] of Object.entries(this.props)) {
      let chatsListElementBlock = new ChatsListElementBlock({ 
                                  title: value.title, 
                                  last_message: value.last_message, 
                                  unread_count:value.unread_count
                                });
       chatsListBlocks.push(chatsListElementBlock); 

    }  
    this.children.chatsListBlocks = chatsListBlocks;
    return true;
  }

}

const withChats = withStore((state) => ({ ...state.chats }))

export const ChatsPage = withChats(ChatsPageBase);

function createChatsPagesProps(){
  let conversations = [
    { personName: 'Андрей', messageText: 'Катастрофы...', messageDate: '12:59',unreadedMessageAmount:3},
    { personName: 'Радим', messageText: 'Нормально!', messageDate: '13:59',unreadedMessageAmount:2},
    { personName: 'Вадим', messageText: 'Отвратительно!', messageDate: '14:59',unreadedMessageAmount:1}
  ];

  let chatsPersonBlocks:ChatsPersonBlock[] = [];

  conversations.forEach((data) => {
    let chatsPersonBlock = new ChatsPersonBlock({ 
                              personName: data.personName, 
                              messageText: data.messageText, 
                              messageDate: data.messageDate,
                              unreadedMessageAmount:data.unreadedMessageAmount
                            });
    chatsPersonBlocks.push(chatsPersonBlock);  
  });

  let conversationMessages = [
    { date: '19 июня', messages: [
                        {isIn:true,time:'12:59',text:'Один раз научишься и наглеешь. Чувствуешь власть над вещами, чувствуешь, что они теперь истинно твои.'},
                        {isIn:false,time:'13:59',text:' И вот в этот самый момент, когда почувствовал, что можешь всё, и наглеешь - в этот самый момент практически всегда и случается катастрофа.'}]},
    { date: '20 июня', messages: [
                        {isIn:true,time:'12:59',text:'В Вашем случае логично предположить сгорание чего-нибудь в принципе не ремонтируемого в машинке - ну например сгорит блок управления, какой уже не выпускается...'},
                        {isIn:false,time:'13:59',text:'Катастрофы очень любят случаться как раз тогда, когда обнаглеешь, и решишь, что ты всё знаешь, умеешь, можешь и вообще ты превыше всего.'}]}
  ];
  let conversationBlocks:ConversationBlock[] = [];

  conversationMessages.forEach((data) => {
    let messages:ChatMessagesBlock[] = []; 
    data.messages.forEach((message) => {
      //отдельный шаблон для сообщений 
      let chatMessagesBlock = new ChatMessagesBlock({isIn:message.isIn, time:message.time, text:message.text});
      messages.push(chatMessagesBlock);
    }); 
    let conversationBlock = new ConversationBlock({ date: data.date, messages: messages});
    conversationBlocks.push(conversationBlock); 
  });

  const chatsSearchInput = new Input({class:'chat-forma-search-input',placeholder:'Поиск',inputId:'chatsSearchInput',type:'text'});
  const chatsMessageInput = new Input({placeholder:'Сообщение',inputId:'message',type:'text'});
  const chatsMessageButton = new Button({isSendMessageButton: true});
  return {
            personName: conversations[0].personName,
            toRightAngleSvg: toRightAngleSvg,
            chatsSearchInput: chatsSearchInput,
            chatsMessageInput: chatsMessageInput,
            chatsPersonBlock: chatsPersonBlocks,
            conversationBlock: conversationBlocks,
            chatsMessageButton: chatsMessageButton 
          };
}