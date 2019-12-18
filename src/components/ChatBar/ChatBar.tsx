import React, { useContext } from 'react';
import injectSheet from 'react-jss';

import chatBarStyle from './ChatBar.style';
import { Context } from '..';

interface IProps {
  classes: {
    wrapper: string,
  }
}

const ChatBar: React.FC<IProps> = ({ classes }) => {
  const context = useContext(Context);

  console.log(context)

  return (
    <div className={classes.wrapper}>
      <input></input>
    </div>
  )
}

export default injectSheet(chatBarStyle)(ChatBar);
