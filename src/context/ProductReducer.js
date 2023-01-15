const initialState = {
    products: [],
    cart:[ ]
}

export const ProductReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case "GET_PRODUCTS": {
            return {
                ...state,
                products:[...payload]
            }
        }
        case "ADD_TO_CART": {
            return {
                ...state,
                cart:[...state.cart,{...payload,cartQuantity:1}]
            }
        }
        case "REMOVE_FROM_CART": {
            return {
                ...state,
                cart:state.cart.filter((p)=>p.id!==payload)
            }
        }
        case "CHANGE_QTY": {
            return {
                ...state,
                cart:state.cart.filter((p)=>p.id===payload[0].id?p.cartQuantity=payload[1]:p)
            }
        }
        default:return state
    }
}