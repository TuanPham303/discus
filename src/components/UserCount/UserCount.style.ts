import theme from '../../style';

const userCountStyle = {
  wrapper: {
    display: 'flex',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: 10,
    color: theme.color.white,
    '& svg': {
      fill: theme.color.onlineGreen,
      height: 20,
      width: 20,
    }
  }
}

export default userCountStyle;
