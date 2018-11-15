import * as actions from 'actions';
import {SAVE_COMMENT} from 'actions/types';
describe('save comment', ()=>{
  it('test type',()=>{
  const action = actions.save_comment('this is a comment');
  expect(action.type).toEqual(SAVE_COMMENT);
})
it('test payload',()=>{
  const action = actions.save_comment('this is a comment');
  expect(action.payload).toEqual('this is a comment');
})


})
