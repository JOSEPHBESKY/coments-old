import React,{useState,useEffect} from 'react'
import { getComments as getFirstsapi,createComment as createCommentapi } from './Api'
import First from './First'
import Form from './Form'
const Manin = ({currentUserId}) => {
    const [backendFirsts,setbackendFirsts]=useState([])
     const rootFirsts=backendFirsts.filter((backendcomment)=>backendcomment.parentId===null)
    const getReplies=commentId=>{
        return backendFirsts.filter((backendcomment)=>backendcomment.parentId===commentId).sort((a,b)=>new Date(a.createAt).getTime() - new Date(b.createAt).getTime())
    }
    console.log(backendFirsts);
    useEffect(()=>{
        getFirstsapi().then((data)=>{
            setbackendFirsts(data)
        })
    },[])
    const addcommand=(text,parentId)=>{
        console.log(text,parentId);
        createCommentapi(text,parentId).then((data)=>{
            setbackendFirsts([...backendFirsts,data])
        })
    }
  return (
    <div className='comments'>
    <h3 className='comments-title'>comments</h3>
    <Form submitLabel='reply' addcommand={addcommand}/>
    <div className='comments-container'>
        {
            backendFirsts.map((rootFirsts)=>(<First key={rootFirsts.id} First={rootFirsts} replies={getReplies(rootFirsts.id)} currentUserId={currentUserId}/>))
        }
    </div>
    </div>
  )
}

export default Main