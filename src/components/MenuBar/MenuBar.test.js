import React from 'react';
import ReactDOM from 'react-dom';
import MenuBar from './MenuBar';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});