import axios from 'axios';

export default (token,itemId)=>{
    console.log(token);
    const updateCartPromise = axios({
        method: "POST",
        url: `${window.apiHost}/cart/updateCart`,
        data: {
            token: token,
            itemId: itemId
        }
    })
    return{
        type: "UPDATE_CART",
        payload: updateCartPromise
    }
}