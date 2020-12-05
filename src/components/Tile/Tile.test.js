import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './Tile';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tile />, div);
  ReactDOM.unmountComponentAtNode(div);
});