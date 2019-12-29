import React from 'react';
import injectSheet from 'react-jss';

import { UserCount } from '..';
import headerStyle from './Header.style';

interface IProps {
  classes: {
    wrapper: string,
    logo: string,
  },
}

const Header: React.FC<IProps> = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.logo}>DISCUS</div>
      <UserCount />
    </div>
  )
}

export default injectSheet(headerStyle)(Header);
