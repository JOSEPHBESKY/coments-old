import React,{Fragment, useState} from 'react'
import Readonlyrow from './Readonlyrow'
import Editablerow from './Editablerow'
import {Button,TextField} from '@mui/material';
function Home() {
  const [contects,setcontects]=useState([])
  const [addformdata,setaddformdata]=useState({
    name:"",
    address:"",
    phonenumber:"",
    email:""
  })
  const [editcontectid,seteditcontectid]=useState(null)
  const [editformdata,seteditformdata]=useState({
    name:"",
    address:"",
    phonenumber:"",
    email:""
  })
  const handleaddformchange=(e)=>{
    e.preventDefault();
    const fieldname=e.target.id
    const fieldvalue=e.target.value
    const newformdata={...addformdata}
    newformdata[fieldname]=fieldvalue
    setaddformdata(newformdata)
  }
  const handleeditformchange=(e)=>{
    e.preventDefault()
    const fieldname=e.target.id
    const fieldvalue=e.target.value
    const newformdata={...editformdata}
    newformdata[fieldname]=fieldvalue
    seteditformdata(newformdata)
  }
  const handleaddformformsubmit=(e)=>{
    e.preventDefault()
    const newcontect={
      name:addformdata.name,
      address:addformdata.address,
      phonenumber:addformdata.phonenumber,
      email:addformdata.email
    }
    const newcontects=[...contects,newcontect]
    setcontects(newcontects)
  }
  const finalformsubmit=(e)=>{
    e.preventDefault()
    const editedcontect={
      id:editcontectid,
      name:editformdata.name,
      address:editformdata.address,
      phonenumber:editformdata.phonenumber,
      email:editformdata.email
    }
    const newcontects=[...contects]
    const index=contects.findIndex((contect)=>contect.id===editcontectid)
    newcontects[index]=editedcontect
    setcontects(newcontects)
    seteditcontectid(null)
  }
  const handleeditclick=(e,contect)=>{
    e.preventDefault()
    seteditcontectid(contect.id)
    const formvalue={
      name:contect.name,

    }
    seteditformdata(formvalue)
  }
  const handlecancelclick=()=>{
    seteditcontectid(null)
  }
  const handledaleteclick=(e)=>{
    const newcontects=[...contects]
    const index=contects.findIndex((contect)=>contect.id===e)
    newcontects.splice(index,1)
    setcontects(newcontects)
  }     
  return (
    <div className='app-container'>
    
    <form onSubmit={handleaddformformsubmit}>
   
    
    <button  type='submit'>
        reply
      </button>
    </form>
    <div onSubmit={finalformsubmit}>
    {contects.map((contect)=>(
 <Fragment>{editcontectid===contect.id ? (<Editablerow  editformdata={editformdata} handleaddformformsubmit={handleaddformformsubmit} handleeditformchange={handleeditformchange} handlecancelclick={handlecancelclick}/>):
      (<Readonlyrow contect={contect} handleeditclick={handleeditclick} handledaleteclick={handledaleteclick}/>)}</Fragment>
    
    ))}
    </div>
    </div>
  )
}

export default Home;