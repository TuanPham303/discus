import React from 'react';
import injectSheet from 'react-jss';
import socketIOClient from 'socket.io-client';

import { Header, MessageList, ContextProvider, ChatBar } from '..';
import appStyle from './App.style';

interface IProps {
  classes: {
    wrapper: string,
  }
}

const endPoint = 'http://localhost:3001';

const App: React.FC<IProps> = ({ classes }) => {
  const socket = socketIOClient(endPoint);

  console.log(socket)


  return (
    <div className={classes.wrapper}>
      <ContextProvider>
        <Header />
        <MessageList />
        <ChatBar />
      </ContextProvider>
    </div>
  );
}

export default injectSheet(appStyle)(App);
