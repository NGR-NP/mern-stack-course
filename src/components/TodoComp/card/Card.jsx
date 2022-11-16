import { useState } from 'react';
import Button from '../../bottom/Button';
import AddTodo from '../addtodo/AddTodo'
import TodoLists from '../todolists/TodoLists';
const Card = () => {
    const PendingTodo = "you have 2 pending todo"
    const [todos, setTodos] = useState([])
    const onAddtodo = (addTodo) => {
        setTodos((prev) => [...prev, addTodo])
    }
    const clearAllTodo = () => {
        setTodos([])
    }
    return (
        <>
            <AddTodo AddTodos={onAddtodo} />
            <TodoLists todoLists={todos} pending={PendingTodo} />
            <Button deleteAll={clearAllTodo} />

        </>
    )
}

export default Card