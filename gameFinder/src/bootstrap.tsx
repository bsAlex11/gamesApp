import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el: Element) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === 'development') {
  const root = document.querySelector('#_game_finder_root');
  if (root) {
    mount(root);
  }
}

export {mount};
