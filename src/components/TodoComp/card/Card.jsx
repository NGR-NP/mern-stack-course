import { useState } from "react";
import Button from "../../bottom/Button";
import AddTodo from "../addtodo/AddTodo";
import TodoLists from "../todolists/TodoLists";
const Card = () => {
  const [todos, setTodos] = useState([
    {
      title: "read",
      strick: false,
    },
    {
      title: "book",
      strick: false,
    },
  ]);
  const onAddtodo = (addTodo) => {
    setTodos((prev) => [...prev, addTodo]);
  };

  const clearAllTodo = () => {
    setTodos((_) => []);
  };
  return (
    <>
      <AddTodo AddTodos={onAddtodo} />
      <TodoLists todoLists={todos} />
      <Button deleteAll={clearAllTodo} />
    </>
  );
};

export default Card;
