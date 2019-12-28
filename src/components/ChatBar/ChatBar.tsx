import React, { useRef, useCallback, useMemo } from 'react';
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
  
  const handleSubmit = useCallback((): void => {
    if (!inputMessageEl.current) { return; }
    
    const userName = sessionStorage.getItem('userName');
    const message = {
      userName: userName, 
      message: inputMessageEl.current.value
    }
    socketClient.emit('messageClientToServer', message)
  }, [])

  return (
    <div className={classes.wrapper}>
      <input type="text" ref={inputMessageEl}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default injectSheet(chatBarStyle)(ChatBar);
