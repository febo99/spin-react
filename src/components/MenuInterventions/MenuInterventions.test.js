import React from 'react';
import ReactDOM from 'react-dom';
import MenuInterventions from './MenuInterventions';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuInterventions />, div);
  ReactDOM.unmountComponentAtNode(div);
});