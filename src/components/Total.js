import React from 'react';
import {connect} from 'react-redux'

const Total = props => {
  console.log('props in total', props)
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.price.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state =>{
  console.log('state in total', state)
  return{
    car: state.car,
    price: state.price,
    // additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, {})(Total);
