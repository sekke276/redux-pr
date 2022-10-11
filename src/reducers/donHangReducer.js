import {CREATE_NEW_DON_HANG} from '../Actions';

const initialState = {
    order: []
}

export default (state = initialState, action) =>{
    switch (action.type){
        case CREATE_NEW_DON_HANG:
            {
                return {
                    
                    order: action.payload
                };
            }
        default: 
              let order = (JSON.parse(localStorage.getItem('order')))
                return order ? {order: order }: state
    }
}