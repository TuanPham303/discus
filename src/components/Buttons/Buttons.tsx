import React from 'react';
import injectSheet from 'react-jss';

import buttonsStyle from './Buttons.style';
import { ReactComponent as IconSend } from '../../icons/iconSend.svg';

interface IGeneticButtonProps {
  onClick: () => void,
  content?: any,
  classes: {
    geneticButton: string,
    a: string,
  },
  classOverride?: any,
}

interface IProps {
  onClick: () => void,
  content?: any,
  classOverride?: any,
}

const Button: React.FC<IGeneticButtonProps> = ({ onClick, content, classes, classOverride }) => {
  return (
    <button
      onClick={onClick}
      className={classOverride
        ? `${classes.geneticButton} ${classOverride}`
        : `${classes.geneticButton}`}
    >
      {content}
    </button>
  )
}

const GeneticButton = injectSheet(buttonsStyle)(Button);

const SubmitButton: React.FC<IProps> = (props) => (
  <GeneticButton
    onClick={props.onClick}
    content='Submit'
  />
)

const SendButton: React.FC<IProps> = (props) => (
  <GeneticButton
    onClick={props.onClick}
    content={<IconSend />}
    classOverride={props.classOverride}
  />
)

export {
  SubmitButton,
  SendButton,
}