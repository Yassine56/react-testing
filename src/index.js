import ReactDom from 'react-dom';
import React from 'react';
import App from 'Components/App';
import Root from 'Root';

ReactDom.render(
  <Root>
    <App />
  </Root>
  , document.getElementById('root')  
);
