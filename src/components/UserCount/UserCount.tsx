import React, { useContext, useState } from 'react';

import { Context } from '..';

const UserCount: React.FC = () => {
  const { socketClient } = useContext(Context);
  const [userCount, setUserCount] = useState<number>(0);

  socketClient.on('userCount', (data) => {
    setUserCount(data);
  })

  return (
    <span>
      {`${userCount} online`}
    </span>
  )
}

export default UserCount;