import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { updateText, resetText } from './actions';

import App from './components/App';
import reducers from './reducers';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  const state = store.getState();
  ReactDOM.render(
    <App
      dispatch={store.dispatch}
      updateText={updateText}
      resetText={resetText}
      text={state.text}
    />,
    document.getElementById('container')
  );
});

ReactDOM.render(
  <App
    dispatch={store.dispatch}
    updateText={updateText}
    resetText={resetText}
  />,
  document.getElementById('container')
);
