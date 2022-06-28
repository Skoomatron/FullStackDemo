// this will be a text field
import React from "react";
import ColorSubmitter from './ColorSubmitter.jsx';

const ColorEnter = (props) => {
  // console.log(props)

  return (
    <div>
      <input
      type='text'
      value={props.colorState}
      placeholder='Enter The Name Of A Color'
      onChange={props.listener}
      ></input>
      <ColorSubmitter submitButton={props.submitButton}/>
    </div>
  )
}

export default ColorEnter;