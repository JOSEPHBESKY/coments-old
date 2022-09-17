import { Avatar } from '@mui/material'
import React from 'react'
function Readonlyrow({contect,handleeditclick,handledaleteclick}) {
  return (
    <div><Avatar /><p>{contect.name}</p>
    <button type='submit' className='edi' onClick={(e)=>{handleeditclick(e,contect)}}>reply</button>
    <button onClick={handledaleteclick} className='del'>delete</button></div>
  )
}

export default Readonlyrow