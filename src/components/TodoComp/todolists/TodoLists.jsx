import React from 'react'
import PendingTodo from '../pendingtodo/PendingTodo'
import './todolists.css'

const TodoLists = ({ todoLists, pending }) => {
  return (
    <div className='sec Cont'>
      {
        todoLists.map((todo, index) => (
          <div className='lists' key={index} >{todo}</div>
          ))
        }
      <PendingTodo pending={pending} />
    </div>
  )
}

export default TodoLists