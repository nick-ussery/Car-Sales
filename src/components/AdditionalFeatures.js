import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {connect} from 'react-redux'
import {addFeature} from '../actions/addFeature'

const AdditionalFeatures = props => {
  console.log('props in features', props)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} handleClick ={()=>{props.addFeature(item)}} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};


const mapStateToProps = state =>{
  console.log('state in additionalFeatures', state)
  return{
    car: state.car,
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures.additionalFeatures
  }
}

export default connect(mapStateToProps, {addFeature})(AdditionalFeatures);
