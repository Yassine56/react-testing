import React from 'react';
import Root from 'Root';
import moxios from 'moxios';
import {mount} from 'enzyme';
import App from 'Components/App';

let wrapper;
beforeEach(()=>{
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
    status: 200,
    response :[
        {
          name: "fetch comment 1"
        },
        {
          name : "fetch comment 2"
        }
      ]
  });
})

afterEach(()=>{
  moxios.uninstall();
  wrapper.unmount();
})

it('can fetch list of comments and display them', (done)=>{
  // attempt to render the whole app
 wrapper = mount(<Root>
  <App />
  </Root>)

  // find fetchcomments button and click it
const button = wrapper.find('.fetch-comments');
button.simulate('click');
moxios.wait(()=>{
  wrapper.update();
  expect(wrapper.find('li').length).toEqual(2);
  done();
});


  // expect to find all the comments

})
