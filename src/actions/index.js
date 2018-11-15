import { SAVE_COMMENT } from 'actions/types';

export function save_comment(comment){
     return({
       type: SAVE_COMMENT,
       payload: comment
     })

}
