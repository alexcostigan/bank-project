import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import DisplayBalance from './components/DisplayBalance'
import App from './App';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
    {/* <DisplayBalance /> */}
  </Provider>,
  document.getElementById('root')
);