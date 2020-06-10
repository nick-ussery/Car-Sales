import React from 'react';
import {connect} from 'react-redux'

import AddedFeature from './AddedFeature';
import { removeFeature } from '../actions/addFeature';

const AddedFeatures = props => {
  console.log('props in addedFeatures', props)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} handleClick = {(e)=>{
              e.preventDefault()
              props.removeFeature(item)
            }}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state =>{
  console.log('state in addedFeatures', state)
  return{
    car: state.car,
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures
  }
}


export default connect(mapStateToProps, {removeFeature})(AddedFeatures);
