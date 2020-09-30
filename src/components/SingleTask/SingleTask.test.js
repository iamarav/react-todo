import React from 'react';
import ReactDOM from 'react-dom';
import SingleTask from './SingleTask';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SingleTask />, div);
  ReactDOM.unmountComponentAtNode(div);
});