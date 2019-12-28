import React, { useState } from 'react';

import Context from './Context';

interface IProps {
  children: React.ReactNode;
}

interface IMessage {
  // id: number,
  // user: string,
  message: string,
}

const ContextProvider: React.FC<IProps> = ({ children }) => {
  const [messageList, setMessageList] = useState<Array<object>>([]);
  const [userName, setUserName] = useState<string>()

  const addMessage = (message: IMessage) => {
    setMessageList([...messageList, message]);
  }

  const state: object = {
    messageList,
    userName,
  }

  const actions: object = {
    addMessage,
    setUserName,
  }

  const context: object = {
    ...state,
    ...actions,
  };

  return (
    <Context.Provider value={context}>
      {children}  
    </Context.Provider>
  )
}

export default ContextProvider;
