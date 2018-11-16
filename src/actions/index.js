import { SAVE_COMMENT } from 'actions/types';
import { FETCH_COMMENTS} from 'actions/types';
import axios from 'axios';
export function save_comment(comment){
     return({
       type: SAVE_COMMENT,
       payload: comment
     })

}

export async function fetchComments(){
  const response = await axios.get('http://jsonplaceholder.typicode.com/comments');
  console.log(response);
  const rresponse = response.data.map(comment => comment.name);
  return({
    type: FETCH_COMMENTS,
    payload : rresponse
  });
}
