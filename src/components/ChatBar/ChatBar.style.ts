import theme from '../../style';

const chatBarStyle = {
  wrapper: {
    display: 'flex',
    height: 100,
    position: 'relative',
    alignItems: 'center',
  },
  input: {
    flexGrow: 1,
    height: '100%',
    padding: 10,
    border: 'none',
    background: '#22313f',
    color: theme.color.white,
    fontSize: 15,
    resize: 'none',
    boxSizing: 'border-box',
    '&::placeholder': {
      color: theme.color.white,
      fontSize: 15,
    },
    '&:focus': {
      outline: 0,
    }
  },
}

export default chatBarStyle;
