import Block from '../../utils/Block';
import template from './button.hbs';
import {Options} from '../../utils/HTTPTransport';
import {isEmpty,hideModal} from '../../utils/helpers';
import MessageController from '../../controllers/MessageController';
import AuthController from '../../controllers/AuthController';
import UserController from '../../controllers/UserController';
import {User} from '../../api/AuthAPI';
import {Chat} from '../../api/ChatsAPI';

interface ButtonProps {
  url?: string;
  modalId?:string;
  formId: string;
  isSendMessageButton?: boolean;
  class?: string;
  title?: string;
  events?: {
    click: () => void;

  };
}

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super('button', props);
    this.props.events = {
        click: () => {validateAndSend(event as Event,this.props.url as string,props.formId as string,props.modalId as string)}
      }
  }

  render() {
    return this.compile(template, this.props);
  }
}


async function uploadAvatar(options:Options,formId:string,modalId:string) {
  const changeAvaForm = document.getElementById(formId) as HTMLFormElement | null;

  if(changeAvaForm !== null){
    const formData = new FormData(changeAvaForm);
    options['data'] = formData;
    await UserController.avatar(options);
    hideModal(modalId);
  }
}

async function createNewChat(options: Options,modalFormId:string) {
  let newChatUserLoginElement = document.getElementById('newChatUserName') as HTMLInputElement | null;
  if (newChatUserLoginElement !== null) {
    let newChatUserLogin = newChatUserLoginElement.value;
    options['headers'] = {'Content-Type': 'application/json'};
    options['data'] = {"login": newChatUserLogin};
    let newChatUserData = await UserController.search(options as Options) as User[];
    if (!isEmpty(newChatUserData)) {
      let userId = newChatUserData[0].id;
      let userName = `${newChatUserData[0].first_name} ${newChatUserData[0].second_name}`;
      options['data'] = {"title": userName};
      let chat = await UserController.createChat(options as Options) as Chat;
      options['data'] = {"users": [userId], "chatId": chat.id};
      await UserController.addUserToChat(options as Options);
      hideModal(modalFormId);

    } else {
      let modalErrorMessage = document.getElementById('modal-error-message') as HTMLElement | null;
      if (modalErrorMessage !== null) {
        modalErrorMessage.textContent = 'Пользователь не найден';
        modalErrorMessage.style.opacity = '1';
      }
    }
  }
}

async function sendRequest(formData: FormData, data: Record<string, string>, options: Options, url: string) {
  for (let key of formData.keys()) {
    data[key] = formData.get(key) as string;
  }
  options['headers'] = {'Content-Type': 'application/json'};
  options['data'] = data;
  if (url === 'signUp') {
    await AuthController.signup(options as Options);
  } else if (url === 'signIn') {
    await AuthController.signin(options as Options);
  } else if (url === 'userProfile') {
    await UserController.profile(options as Options);
  } else if (url === 'userPassword') {
    await UserController.password(options as Options);
  }else if(url==='sendMessage'){
    MessageController.sendMessage(options.data.message);
  }
}

function validateInputs(formId: string) {
  const form = document.getElementById(formId) as HTMLFormElement;
  let formData = new FormData();
  Array.from(form.elements).forEach((element: HTMLInputElement) => {
    if (element.tagName === "INPUT" && element.name !== 'passwordval') {
      let elementName = element.name;
      let elementValue = element.value;
      formData.set(elementName, elementValue);
      element.focus();
    }
  });
  let hasErrors = false;
  const warns = Array.from(document.getElementsByClassName('warn') as HTMLCollectionOf<HTMLElement>);
  for (let warn of warns) {
    if (warn.style.opacity === '1') {
      hasErrors = true;
    }
  }
  return {formData, hasErrors};
}

async function deleteChatOrUserFromChat(url:string,formId: string, options: Options) {
  const form = document.getElementById(formId) as HTMLFormElement;
  const deleteChatId = form.dataset.deleteChatId;
  options['data'] = {chatId: deleteChatId};
  if (url === 'deleteChat'){
    await UserController.deleteChat(options);

  }else{
    const deleteUserId = form.dataset.deleteUserId;
    options['data'] = {users:[deleteUserId],chatId: deleteChatId};
    await UserController.deleteUserFromChat(options);
    options['data'] = {id: deleteChatId};
    await UserController.getChatUsers(options);

  }

}

async function validateAndSend(event:Event, url:string, formId:string,modalId:string) {
  event.preventDefault();
  let options:Options = {}
  let data:Record<string,string> = {};

  if (url==='avatar'){
    await uploadAvatar(options,formId,modalId);
  }else if(url==='newChat'){
    await createNewChat(options,modalId);
  }else if(url==='deleteUserFromChat'){
    await deleteChatOrUserFromChat(url,formId, options);
  }else if(url==='deleteChat'){
    await deleteChatOrUserFromChat(url,formId, options);
  }else{
    let {formData, hasErrors} = validateInputs(formId);
    if(hasErrors){
      console.log('Пожалуйста исправьте ошибки');
    }else{
      await sendRequest(formData, data, options, url);
    }
  }
}