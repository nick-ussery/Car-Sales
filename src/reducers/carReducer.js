export const initialState = {

    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    }
}



export const carReducer = (state = initialState.car, action) =>{
    console.log('carReducer action, state', action, state)

    switch(action.type){
      case 'ADD_FEATURE':
        return{
          ...state,
          features: [...state.features, action.payload]
        }

      case 'REMOVE_FEATURE':
        let list = state.features
        let removedFeature = list.find((feature)=>{return feature.name === action.payload.name })
        let newList = list.filter(feature=>{return feature.name !== removedFeature.name})
        console.log('newList', newList)
        return{
          ...state,
          features:newList
        }
        default: return state
    }
}