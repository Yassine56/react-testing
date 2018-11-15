import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('comment reducer properly saves comments in the state', ()=>{
  const action = {
    type: SAVE_COMMENT,
    payload: 'this is a comment'
  }
   expect(commentsReducer([],action)).toContain('this is a comment');
})

it('handling unknown action types', ()=>{
  const action = {
    type: 'unknown type',
    payload : 'this is a comment'
  }
  expect(commentsReducer([],action)).toEqual([]);
})
