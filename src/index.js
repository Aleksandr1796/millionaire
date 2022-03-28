import React from 'react';
import { render } from 'react-dom';
import Application from './Application';

const renderApp = () => {
  render(<Application />, document.getElementById('root'));
};

renderApp();
