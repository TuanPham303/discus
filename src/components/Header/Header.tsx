import React from 'react';
import injectSheet from 'react-jss';

import { UserCount } from '..';
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
      <UserCount />
    </div>
  )
}

export default injectSheet(headerStyle)(Header);
