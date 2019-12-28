import React, { useState, useRef, useCallback } from 'react';
import injectSheet from 'react-jss';
import Modal from 'react-modal';

import signInModalStyle from './SignInModal.style';
import { SubmitButton } from '..';

interface IProps {
  classes: {
    wrapper: string,
  },
}

const userName = sessionStorage.getItem('userName');

const modalStyle = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

const SignInModal: React.FC<IProps> = ({ classes }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const userNameInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback((): void => {
    if (!userNameInputRef.current || !userNameInputRef.current.value) { return; }

    setIsOpen(false);
    sessionStorage.setItem('userName', userNameInputRef.current.value);
  }, [])

  return (
    <Modal
      isOpen={!userName && isOpen}
      style={modalStyle}
    >
      <SubmitButton onClick={handleSubmit}/>
      <input 
        ref={userNameInputRef}
        placeholder='What is you name?'
      />
    </Modal>
  )
}

export default injectSheet(signInModalStyle)(SignInModal);
