import React from 'react'

export default function Dropdown(data) {

const dataArr = (data.data)

console.log(dataArr);

const optionItems = dataArr.map(el =>{
    return(
    <option key={el.name} value={el.name}>{el.name}</option>
)}
);

  return (
    <div className='dropdown-container'>
    <div className='input-container'>
     <select>
        <option>
        &nbsp;
        </option>
        {optionItems}
     </select>
    </div>

</div>
  )
}