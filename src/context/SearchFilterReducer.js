export const SeachReducer = (state, { type, payload }) => {
    switch (type) {
        case "GET_SEARCH": {
            return {
                ...state,
                searchQuery:payload
            }
        }
        case "CHANGE_CATEGORY": {
            let key = payload[1] // red green men women
            let store = state[payload[0]] //Gender price type
            let newCategory = [...store]
            //checking if checkbox is already checked or its value is present in our store then we will remove it else we will add it

            if (store.includes(key)) {
            newCategory.splice(newCategory.indexOf(key), 1)
            }
         else {
             newCategory.push(key)
             }
            return {
                ...state,
                [payload[0]]:newCategory
            }
        }
        default:return state
    }
}
