import {CREATE_NEW_SANPHAM} from '../Actions'
const initialState = {
    sanpham : [{
        _id: 1,
        ten: "Table",
        hinh: 'https://cdn11.bigcommerce.com/s-1u1m3wn/images/stencil/1280x1280/products/3445/9709/Gosford-messmate-timber-dining-table-1800-front-on-02__00409.1614728072.jpg?c=2',
        gia: 500,
        thue:50,
    },
    {
        _id: 2,
        ten: 'Laptop ASUS',
        hinh: 'https://fptshop.com.vn/Uploads/Originals/2021/3/3/637503832634005581_asus-vivobook-x515-print-bac-dd.jpg',
        gia: 1000,
        thue: 100
    }]
}

export default (state = initialState, action) => {
    switch(action.type)
    {
        case CREATE_NEW_SANPHAM:
            {
                console.log('chay reducer')
                console.log(state)
                return {
                    sanpham: [...state.sanpham, action.payload],
                };
                break;
                
            }
            default:
                return state;
    }
            return state;
        }
