import React, { useContext, useRef } from 'react';
import injectSheet from 'react-jss';

import chatBarStyle from './ChatBar.style';
import { Context } from '..';

interface IProps {
  classes: {
    wrapper: string,
  }
}

const ChatBar: React.FC<IProps> = ({ classes }) => {
  const { addMessage } = useContext(Context);
  const inputEl = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (!inputEl.current || !addMessage) { return; }
    
    const message = {
      message: inputEl.current.value
    }
    addMessage(message);
  }

  return (
    <div className={classes.wrapper}>
      <input type="text" ref={inputEl}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default injectSheet(chatBarStyle)(ChatBar);
