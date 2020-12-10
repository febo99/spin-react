import React from 'react';
import ReactDOM from 'react-dom';
import MenuInterventionsItem from './MenuInterventionsItem';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuInterventionsItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});