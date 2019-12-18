import React from 'react';
import injectSheet from 'react-jss';

import headerStyle from './Header.style';

interface IProps {
  classes: {
    wrapper: string,
  },
}

const Header: React.FC<IProps> = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      Discus
    </div>
  )
}

export default injectSheet(headerStyle)(Header);
