/*Todoli:

Description: Renders individual todo items in the list.
Functionality: Displays a single todo item and allows users to delete it. */

import React from 'react'

function Todoli(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete" 
        onClick={e=>{
            props.deleteItem(props.index)
        }}></i>
        </span>
    </li>
  )
}

export default Todoli;