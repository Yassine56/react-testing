import App from '../App';
import React from 'react';
import {shallow, mount} from 'enzyme';
import CommentBox from 'Components/CommentBox';
import CommentList from 'Components/CommentList';
import Root from 'Root';
let wrapper;
beforeEach(() => {
  wrapper = mount(
    <Root>
      <App />
    </Root>);

});
afterEach(()=>{
  wrapper.unmount();
});

it('shows a comment list',()=>{
  console.log(wrapper.find('CommentList').length);
  expect(wrapper.find('CommentList').length).toEqual(1);
});
it('shows a comment box', ()=> {
console.log(wrapper.find('CommentBox').length);
  expect(wrapper.find('CommentBox').length).toEqual(1);
});
