import React from 'react';

interface IProps {
  onClick: VoidFunction,
  content?: any,
}

const GeneticButton: React.FC<IProps> = (props) => (
  <button
    onClick={props.onClick}
  >
    {props.content}
  </button>
)

const SubmitButton: React.FC<IProps> = (props) => (
  <GeneticButton
    onClick={props.onClick}
    content='Submit'
  />
)

export {
  SubmitButton,
}