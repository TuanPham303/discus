import socketIOClient from 'socket.io-client';

export { default as App } from './App';
export { default as Header } from './Header';
export { default as MessageList } from './MessageList';
export { default as ChatBar } from './ChatBar';
export { default as Context, ContextProvider } from './Context';

const endPoint = 'http://localhost:3001';
export const socketClient = socketIOClient(endPoint);
