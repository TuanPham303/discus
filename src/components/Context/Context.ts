import { createContext } from 'react';

interface IContext {
  messageList?: Array<object>,
  addMessage?: any,
  socketClient?: any,
}

const Context = createContext<IContext>({});

export default Context;
