import Add_to_cart from "../Add_to_cart"
import Wishlist from "../Wishlist"

export const Add_to_Cart = data =>({
    type: Add_to_cart,
    payload:data
})
export const WishList = data => ({
    type:Wishlist,
    payload:data
})