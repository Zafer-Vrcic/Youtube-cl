import { useState } from "react"

const StringArea = ({text}) => {
    const [expand,setExpand]= useState(false)

    let shortText=text;
// if the description are closed and have more than 300 letter
// cut to description and put .. in the end
    if(!expand && text.length>300){
    shortText=text.slice(0,300) + '...more'
    }

  return (
    <div onClick={()=>setExpand(!expand )}>{shortText.split('\n').map((line)=>(
        <span  > 
            {line} <br/>
        </span>
    ))}</div>
    
  )
}

export default StringArea