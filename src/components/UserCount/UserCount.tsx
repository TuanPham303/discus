import React, { useContext, useState } from 'react';
import injectSheet from 'react-jss';

import { ReactComponent as IconOnline } from '../../icons/iconOnline.svg'
import { Context } from '..';
import userCountStyle from './UserCount.style';

interface Props {
  classes: {
    wrapper: string,
  }
}

const UserCount: React.FC<Props> = ({ classes }) => {
  const { socketClient } = useContext(Context);
  const [userCount, setUserCount] = useState<number>(0);

  socketClient.on('userCount', (data) => {
    setUserCount(data);
  })

  return (
    <div className={classes.wrapper}>
      <IconOnline />
      <div>{`${userCount}`}</div>
    </div>
  )
}

export default injectSheet(userCountStyle)(UserCount);