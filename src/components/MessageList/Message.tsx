import React from 'react';
import injectSheet from 'react-jss';

import messageStyle from './Message.style';

interface IProps {
  classes: {
    wrapper: string,
    message: string,
    userName: string,
  },
  key: string,
  userName: string,
  message: string,
}

const Message: React.FC<IProps> = (props) => {
  const { classes, userName, message } = props;
  return (
    <div className={classes.wrapper}>
      <div className={classes.userName}>{userName}</div>
      <div className={classes.message}>{message}</div>
    </div>
  )
}

export default injectSheet(messageStyle)(Message);
