import React from 'react';

export default function ColorChanger(props) {
  console.log('Color Props', props)
  return (
    <select className="dropDownContainer"
    onChange={(e)=>props.updateColor(e.target.value)}
    disabled={props.updateEditStatus === 'false'}>
      <option value="black"> Black </option>
      <option value="blue"> Blue </option>
      <option value="green"> Green </option>
    </select>
  )
}