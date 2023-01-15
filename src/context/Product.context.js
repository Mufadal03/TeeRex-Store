import { createContext, useReducer } from "react";
import { ProductReducer } from "./ProductReducer";
import { SeachReducer } from "./SearchFilterReducer";

export const ProductContext = createContext()



export const ProductContextProvider = ({ children }) => {
    const [state,dispatch] = useReducer(ProductReducer,{
        products: [],
        cart:[]
    })
    const [filterState, dispatchFilter] = useReducer(SeachReducer, {
        Color: [],
        Gender: [],
        Price: [],
        Type: [],
        searchQuery:""
    })
    return (
        <ProductContext.Provider value={{state,dispatch,filterState,dispatchFilter}}>
            {children}
        </ProductContext.Provider>
    )
}