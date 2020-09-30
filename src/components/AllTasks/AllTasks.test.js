import React from 'react';
import ReactDOM from 'react-dom';
import AllTasks from './AllTasks';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AllTasks />, div);
  ReactDOM.unmountComponentAtNode(div);
});