import {CREATE_NEW_DON_HANG} from '../Actions';

const initialState = {
    order: []
}

export default (state = initialState, action) =>{
    console.log('chay reducer don hang', action.payload)
    switch (action.type){
        case CREATE_NEW_DON_HANG:
            {
                return {
                    
                    order: [...state.order, action.payload]
                };
            }
        default: 
            return state;
    }
}