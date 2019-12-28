import React, { useRef } from 'react';
import injectSheet from 'react-jss';

import chatBarStyle from './ChatBar.style';
import { socketClient } from '..';

interface IProps {
  classes: {
    wrapper: string,
  }
}

const ChatBar: React.FC<IProps> = ({ classes }) => {
  const inputMessageEl = useRef<HTMLInputElement>(null);
  const inputNameEl = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (!inputMessageEl.current || !inputNameEl.current) { return; }
    
    const message = {
      userName: inputNameEl.current.value, 
      message: inputMessageEl.current.value
    }
    socketClient.emit('messageClientToServer', message)
  }

  return (
    <div className={classes.wrapper}>
      <input type="text" ref={inputNameEl}/>
      <input type="text" ref={inputMessageEl}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default injectSheet(chatBarStyle)(ChatBar);
