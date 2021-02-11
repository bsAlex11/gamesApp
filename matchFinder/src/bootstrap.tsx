import React from 'react';
import ReactDOM from 'react-dom';

const mount = (el: Element) => {

  ReactDOM.render(
    <p>match finderrrr appp is hereeerr22333555522</p>,
    el
  );
};

if (process.env.NODE_ENV === 'development') {  
  const root = document.querySelector('#_match_chat_root');
  if (root) {
    mount(root);
  }
}

export { mount };
