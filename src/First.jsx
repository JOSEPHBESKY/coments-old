import React from 'react'
import {Avatar} from '@mui/material'
import Home from './Home'
const First = ({commant,replies}) => {
  return (
    <div>
    <div> <Avatar/>{commant.username} {commant.createAt}</div>
    
    <div>{commant.body}</div>
    <div><button>{<Home/>} </button>{<Home/>} <span>edit</span></div>

    {
        replies.length > 0 && (
            <div> 
            {
                replies.map((reply)=>(<Commant commant={reply} key={reply.id} replies={[]}/>))
            }
            </div>
        )
    }
    </div>
  )
}

export default First;