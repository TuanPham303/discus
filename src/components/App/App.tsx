import React from 'react';

import { Header, MessageList, ContextProvider, ChatBar } from '..';

const App: React.FC = () => {
  return (
    <div className="App">
      <ContextProvider>
        <Header />
        <MessageList />
        <ChatBar />
      </ContextProvider>
    </div>
  );
}

export default App;
