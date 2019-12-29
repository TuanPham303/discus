import React, { useRef, useCallback, useContext, useEffect } from 'react';
import injectSheet from 'react-jss';

import chatBarStyle from './ChatBar.style';
import { Context } from '..';

interface IProps {
  classes: {
    wrapper: string,
    input: string,
  }
}

const userName = sessionStorage.getItem('userName');

const ChatBar: React.FC<IProps> = ({ classes }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { socketClient } = useContext(Context);

  const handleSendMessage = useCallback((event): void => {
    if (!textareaRef.current || event.key !== 'Enter') { return; }
    
    const message = {
      userName: userName, 
      message: textareaRef.current.value,
      id: Date.now().toString(),
    }
    socketClient.emit('messageClientToServer', message)
  
    textareaRef.current.value = '';
  }, [socketClient])
  
  useEffect(() => {
    if (!textareaRef.current) { return; }

    textareaRef.current.addEventListener('keyup', handleSendMessage);
  }, [handleSendMessage])

  return (
    <div className={classes.wrapper}>
      <textarea
        ref={textareaRef}
        className={classes.input}
        placeholder='Type a message...'
      />
    </div>
  )
}

export default injectSheet(chatBarStyle)(ChatBar);
