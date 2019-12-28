import socketIOClient from 'socket.io-client';

export { default as App } from './App';
export { default as ChatBar } from './ChatBar';
export { default as Context, ContextProvider } from './Context';
export { default as Header } from './Header';
export { default as MessageList } from './MessageList';
export * from './Buttons';
export * from './Modals';

//TODO need to separate this variable into a different file
const endPoint = 'http://localhost:3001';
export const socketClient = socketIOClient(endPoint);
