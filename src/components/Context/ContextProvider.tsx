import React from 'react';

import Context from './Context';

interface PropsType {
  children: React.ReactNode;
}

const ContextProvider: React.FC<PropsType> = ({ children }) => {
  const context = {};
  return (
    <Context.Provider value={context}>
      {children}  
    </Context.Provider> 
    
  )
}

export default ContextProvider;
