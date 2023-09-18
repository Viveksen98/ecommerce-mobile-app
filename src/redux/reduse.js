import Add_to_cart from "../Add_to_cart";
import Wishlist from "../Wishlist";
const initialstate=[];

export const Redusers = (state=initialstate,action) =>{
    switch(action.type){
        case Add_to_cart:{
            return[...state,action.payload]
        }
        case Wishlist:{
            return[
                ...state,action.payload
            ]
        }
        default:
            return state
    }
}