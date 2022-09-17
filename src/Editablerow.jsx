import { Avatar } from '@mui/material'
import React,{useState} from 'react'
function Editablerow({editformdata,handleeditformchange,handlecancelclick,handleaddformformsubmit}) {
  const [comant,setcomant]=useState(editformdata)
  return (
    
    <div>
    <Avatar /><p >{comant.name}</p>
    <input type={'text'} id='name' placeholder='enter name' required='required' onChange={handleeditformchange} />   
   <button type='submit' className='sav' onClick={handleeditformchange}>reply</button> 
   <button  onClick={handlecancelclick} className='can'>cancel</button>
   </div>
    
  )
}

export default Editablerow