import { VISIBILITY_TYPES } from '../actions';

const Visibility = (state=VISIBILITY_TYPES.ALL,action)=>{
    switch(action.type){
        case 'VISIBILITY':
            return action.filter

        default: return state
    }
}

export default Visibility;