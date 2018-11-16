import React from 'react';
import Root from 'Root';
import {mount} from 'enzyme';
import App from 'Components/App';

it('can fetch list of comments and display them',()=>{
  // attempt to render the whole app
const wrapped = mount(<Root>
  <App />
  </Root>)

  // find fetchcomments button and click it


  // expect to find 500 comments
})
