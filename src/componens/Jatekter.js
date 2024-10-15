import React from 'react'
import Lampa from './Lampa'

export default function Jatekter(props) {
  return (
        <>
          {
            props.lista.map((elem, index) =>{
                return (<Lampa igaz={elem} key={index}/>)
            })
          }
        </>
      )
}
