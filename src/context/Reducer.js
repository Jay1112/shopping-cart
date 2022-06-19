export const cartReducer = (state,action) => {

    switch(action.type){
        case "FETCH_DATA" :
            return {
                ...state,
                products : [...state.products, ...action.payload],
            }
        case "ADD_TO_CART" : 
            return {...state, cart : [...state.cart, { ...action.payload, qty : 1 } ]};
        case "REMOVE_FROM_CART" : 
            return {...state, cart : state.cart.filter((item)=>{
                return item.id !== action.payload.id}
            )};
        case "UPDATE_QUANTITY":
            return {...state, cart : state.cart.map((item)=>{
                if(item.id === action.payload.id){
                    item.qty = action.payload.qty;
                }
                return item;
            })}
      default : 
                return state;
    }

};