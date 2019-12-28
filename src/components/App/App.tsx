import React from 'react';
import injectSheet from 'react-jss';

import { Header, MessageList, ContextProvider, ChatBar, SignInModal } from '..';
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
        <SignInModal />
      </ContextProvider>
    </div>
  );
}

export default injectSheet(appStyle)(App);
