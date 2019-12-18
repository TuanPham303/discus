import React from 'react';
import injectSheet from 'react-jss';

import messageListStyle from './MessageList.style';

interface IProps {
  classes: {
    wrapper: string,
  },
}

const MessageList: React.FC<IProps> = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      List of messages
    </div>
  )
}

export default injectSheet(messageListStyle)(MessageList);
