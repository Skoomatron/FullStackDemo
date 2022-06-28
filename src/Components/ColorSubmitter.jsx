// This will be a reusable button
import React from "react";
import ColorMapper from './ColorMapper.jsx';

const ColorSubmitter = (props) => {
  console.log('Button Loaded', props)
  return (
    <div>
      <button onClick={() => {
        props.submitButton();
      }}>
        Give Me Treasure Arrrrgg
      </button>
      <ColorMapper/>
    </div>
  )
}

export default ColorSubmitter;