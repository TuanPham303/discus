import theme from '../../style';

const headerStyle = {
  wrapper: {
    height: 50,
    position: 'relative',
    background: theme.color.pickledBluewood,
    padding: 10,
  },
  logo: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    color: theme.color.white,
    fontSize: 50,
  }
};

export default headerStyle;
