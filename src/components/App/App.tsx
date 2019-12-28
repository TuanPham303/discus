import React from 'react';
import injectSheet from 'react-jss';

import { Header, MessageList, ContextProvider, ChatBar } from '..';
import appStyle from './App.style';

interface IProps {
  classes: {
    wrapper: string,
  }
}

const App: React.FC<IProps> = ({ classes }) => {
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
