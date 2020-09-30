import React from 'react';
import ReactDOM from 'react-dom';
import TaskAppComponent from './TaskAppComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskAppComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});