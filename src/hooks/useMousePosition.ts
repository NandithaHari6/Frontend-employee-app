import { useState,useEffect } from "react";


function useMousePosition(){
    const [xpos,setXPos]=useState(0);
    const [ypos,setYPos]=useState(0);
    const handleMouseMove=(event:MouseEvent)=>{
            setXPos(event.clientX);
            setYPos(event.clientY)
    }
    useEffect(()=>{
            window.addEventListener("mousemove",handleMouseMove)
    
    return ()=>{
        window.removeEventListener("mousemove",handleMouseMove)
    }},[])
    return [xpos,ypos];


}
export default useMousePosition;