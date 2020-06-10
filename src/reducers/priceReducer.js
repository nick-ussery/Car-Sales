import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/addFeature"

export const initialState ={
    additionalPrice: 0,
}

export const priceReducer = (state= initialState, action)=>{
    console.log('priceReducer',action)

    switch(action.type){
        case ADD_FEATURE:
            let newPrice = state.additionalPrice + action.payload.price
            return{
                ...state,
                additionalPrice: newPrice
                }
        case REMOVE_FEATURE:
            let reducedPrice = state.additionalPrice - action.payload.price
            return{
                ...state,
                additionalPrice: reducedPrice
            }
        default: return state
    }
}