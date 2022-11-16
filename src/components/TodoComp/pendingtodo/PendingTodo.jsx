import React from 'react'
import './pendingtodo.css'
const PendingTodo = ({pending}) => {
  return (
    <div className="pendingCont">
        <div className="pending">{pending}</div>
    </div>
  )
}

export default PendingTodo