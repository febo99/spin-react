import React from 'react';
import ReactDOM from 'react-dom';
import MapPage from './MapPage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MapPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});