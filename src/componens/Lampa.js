import React from 'react'
import "./Lampa.css"

export default function Lampa(props) {
    function katt(){
        props.katt(props.index)
    }
  return (
    <div className={`cella ${props.igaz?"fel":"le"}`}> 
        
    </div>
  )
}
