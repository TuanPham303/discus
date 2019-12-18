import React from 'react';
import injectSheet from 'react-jss';

import chatBarStyle from './ChatBar.style';

interface PropsType {
  classes: {
    wrapper: string,
  }
}

const ChatBar: React.FC<PropsType> = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <input></input>
    </div>
  )
}

export default injectSheet(chatBarStyle)(ChatBar);
