import React from 'react';
import CommentList from 'Components/CommentList';
import {mount} from 'enzyme';
import Root from 'Root';
let wrapper;
beforeEach(()=>{
  const initialState = { comments : ['comment 1', 'comment 2', 'comment 3']};
  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})
afterEach(()=>{
  wrapper.unmount();
})

it('test that each comment generates one li element',()=>{
  expect(wrapper.find('li').length).toEqual(3);
});

it('test that the components renders the comments text',()=> {
  expect(wrapper.render().text()).toContain('comment 1');
  expect(wrapper.render().text()).toContain('comment 2');
})
