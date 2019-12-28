import React, { useRef, useCallback, useContext } from 'react';
import injectSheet from 'react-jss';

import chatBarStyle from './ChatBar.style';
import { Context } from '..';

interface IProps {
  classes: {
    wrapper: string,
  }
}


const ChatBar: React.FC<IProps> = ({ classes }) => {
  const inputMessageEl = useRef<HTMLInputElement>(null);
  const { socketClient } = useContext(Context);
  
  const handleSubmit = useCallback((): void => {
    if (!inputMessageEl.current) { return; }
    
    const userName = sessionStorage.getItem('userName');
    const message = {
      userName: userName, 
      message: inputMessageEl.current.value,
      id: Date.now().toString(),
    }
    socketClient.emit('messageClientToServer', message)
  }, [socketClient])

  return (
    <div className={classes.wrapper}>
      <input type="text" ref={inputMessageEl}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default injectSheet(chatBarStyle)(ChatBar);
