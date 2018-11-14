import App from '../App';
import React from 'react';
import {shallow} from 'enzyme';
import CommentBox from 'Components/CommentBox';
import CommentList from 'Components/CommentList';
let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
})

it('shows a comment box', ()=> {
  const div = document.createElement('div');


  //expect(wrapper.find('CommentBox')).to.have.lengthOf(1);
  expect(wrapper.find('CommentBox').length).toEqual(1);
})

it('shows a comment list',()=>{
  expect(wrapper.find('CommentList').length).toEqual(1);
})
