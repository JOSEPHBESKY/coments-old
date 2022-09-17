
import React,{useState} from 'react'
const Form = ({addcommand,submitLabel}) => {
    const [text,setText]=useState("")
    const onSubmit=(e)=>{
        e.preventDefault()
        addcommand(text)
        setText('')
    }
    
  return (
    <div>
    <form onSubmit={onSubmit}>
    <textarea value={text} onChange={(e)=>setText(e.target.value)}/>
    <button type='submit'>{submitLabel}</button>
    </form>
    </div>
  )
}

export default Form