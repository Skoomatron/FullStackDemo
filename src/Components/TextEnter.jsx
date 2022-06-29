import React from 'react';

const TextEnter = (props) => {

  return (
    <div>
      <input
      type='text'
      name='text'
      value={props.textState}
      placeholder='Text For Box'
      onChange={props.listener}
      ></input>
    </div>
  )
}

export default TextEnter;