import { createContext } from 'react';

interface IContext {
  messageList?: Array<object>,
  addMessage?: any,
  userName?: string,
  setUserName?: any,
}

const Context = createContext<IContext>({});

export default Context;
