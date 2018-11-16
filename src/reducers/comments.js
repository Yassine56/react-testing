import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';
export default function(state =[],action){
  switch (action.type) {
    case SAVE_COMMENT:
        return [...state, action.payload];
    case FETCH_COMMENTS:
        const fetchedcomments = action.payload;
        return [...state, ...fetchedcomments];
    default:
        return state;

  }
}
