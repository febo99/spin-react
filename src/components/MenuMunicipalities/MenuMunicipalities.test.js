import React from 'react';
import ReactDOM from 'react-dom';
import MenuMunicipalities from './MenuMunicipalities';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuMunicipalities />, div);
  ReactDOM.unmountComponentAtNode(div);
});