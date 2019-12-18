import React, { useState } from 'react';

import Context from './Context';

interface IProps {
  children: React.ReactNode;
}

const ContextProvider: React.FC<IProps> = ({ children }) => {
  const [messageList, setMessageList] = useState([]);

  const handleSendMessage = (input: object) => {
    setMessageList((old) => old.push(input))
    return;
  }

  const state = {
    messageList,
  }

  const actions = {
    
  }

  const context = {};
  return (
    <Context.Provider value={context}>
      {children}  
    </Context.Provider> 
    
  )
}

export default ContextProvider;
