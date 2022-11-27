import { useState } from "react";
import Button from "../../bottom/Button";
import AddTodo from "../addtodo/AddTodo";
import TodoLists from "../todolists/TodoLists";
const Card = () => {
  const PendingTodo = "you have 2 pending todo";
  const [todos, setTodos] = useState([
    {
      title: "book",
      strike: false,
    },
    {
      title: "water",
      strike: false,
    },
  ]);
  const onAddtodo = (addTodo) => {
    setTodos((prev) => [...prev, addTodo]);
  };

  const todoStrike = (index) =>{
    const newTodoList = todos.map((todo, idx) =>{
      if(index === idx){
        return {...todo, strike : !todo.strike}
      }
      return todo
    })
    setTodos((prev) =>[...newTodoList])
  }


  const clearAllTodo = () => {
    setTodos([]);
  };
  return (
    <>
      <AddTodo AddTodos={onAddtodo} />
      <TodoLists todoLists={todos} pending={PendingTodo} todoStrike={todoStrike} />
      <Button deleteAll={clearAllTodo} />
    </>
  );
};

export default Card;
