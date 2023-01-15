const initialState = {
    products: [],
    cart:[]
}

export const ProductReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case "GET_PRODUCTS": {
            return {
                ...state,
                products:[...payload]
            }
        }
        default:return state
    }
}