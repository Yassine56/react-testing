import {mount} from 'enzyme';
//  testing with full dom rendering for learning purposes, shallow testing would be just fine.
import React from 'react';
import CommentBox from 'Components/CommentBox';
let wrapper;
beforeEach(()=>{
   wrapper = mount(<CommentBox />);
})

it('has a text area and a button', ()=> {
  expect(wrapper.find('textarea').length).toEqual(1);
  expect(wrapper.find('button').length).toEqual(1);
})

describe('the textarea', () => {
      beforeEach(()=>{
            wrapper.find('textarea').simulate('change', {
              target : {value : 'new comment value'}
            })
            wrapper.update();
      })

      it('has a textarea that users can type in', ()=>{


          expect(wrapper.find('textarea').prop('value')).toEqual('new comment value');
      })
      it('empty textarea on form submit', ()=> {
        //  expect(wrapper.find('textarea').prop('value')).toEqual('new comment value');
          wrapper.find('form').simulate('submit');
          wrapper.update();
          expect(wrapper.find('textarea').prop('value')).toEqual('');
      })

})



afterEach(()=>{
  wrapper.unmount()
})
