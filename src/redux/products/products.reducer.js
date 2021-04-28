
let initialState = [];


const productsReducer = (state=initialState, action)=>{
    let products = [...state];
    switch(action.type){

        case 'ADD_PRODUCT':
            products.push(action.payload.product);
            return products;
        
        case 'CLEAR_PRODUCTS':
            return []

        default:
            return [...state];

    }
}

export default productsReducer;