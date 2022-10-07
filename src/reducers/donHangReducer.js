import {CREATE_NEW_DON_HANG} from '../Actions';

const initialState = {
    order: []
}

export default (state = initialState, action) =>{
    switch (action.type){
        case CREATE_NEW_DON_HANG:
            {
                let newOrder = [...state.order,action.payload]
                localStorage.setItem('order',JSON.stringify(newOrder))
                return {
                    
                    order: newOrder
                };
            }
        default: 
              let order = (JSON.parse(localStorage.getItem('order')))
                return order ? {order: order }: state
    }
}