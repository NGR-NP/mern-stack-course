import React from 'react'
import './button.css'
const Button = ({deleteAll}) => {
  const handleClick =()=>{
    deleteAll()
  }
  return (
    <button className='clear' onClick={handleClick}>Clear all</button>

  )
}

export default Button