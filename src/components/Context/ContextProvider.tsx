import React, { useState } from 'react';
import socketIOClient from 'socket.io-client';

import Context from './Context';
import { END_POINT } from '../../constants'

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

  const socketClient = socketIOClient(END_POINT);

  const addMessage = (message: IMessage) => {
    setMessageList([...messageList, message]);
  }

  const state: object = {
    messageList,
    userName,
    socketClient,
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
