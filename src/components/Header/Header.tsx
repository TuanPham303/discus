import React from 'react';
import injectSheet from 'react-jss';

import headerStyle from './Header.style';

interface PropsType {
  classes: object,
}

const Header = ({ classes }: PropsType) => {
  return (
    <div className={classes.wrapper}>
      Discus
    </div>
  )
}

export default injectSheet(headerStyle)(Header);
