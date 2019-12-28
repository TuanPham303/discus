import React, { useContext } from 'react';
import injectSheet from 'react-jss';

import { Context } from '..';
import messageListStyle from './MessageList.style';

interface IProps {
  classes: {
    wrapper: string,
  },
}

const renderMessageList = (messageList) => {
  if (!messageList || messageList.length <= 0) { return; }

  return messageList.map((m) => (
    <div key={m.id}>{`${m.userName}: ${m.message}`}</div>
  ))
}

const MessageList: React.FC<IProps> = ({ classes }) => {
  const { messageList, addMessage, socketClient } = useContext(Context);

  socketClient.on('messageServerToClient', (message) => addMessage(message))

  return (
    <div className={classes.wrapper}>
      {renderMessageList(messageList)}
    </div>
  )
}

export default injectSheet(messageListStyle)(MessageList);
