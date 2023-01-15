import { createContext, useReducer } from "react";
import { ProductReducer } from "./ProductReducer";

export const ProductContext = createContext()



export const ProductContextProvider = ({ children }) => {
    const [state,dispatch] = useReducer(ProductReducer,{
        products: [],
        cart:[]
    })
    return (
        <ProductContext.Provider value={{state,dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}