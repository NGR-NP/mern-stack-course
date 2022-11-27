import { useState } from "react";
import "./addcont.css";
const AddTodo = ({ AddTodos }) => {
  const [addTodo, setaddTodo] = useState("");
  const handleChange = (event) => {
    const todoValue = event.target.value;
    setaddTodo((_) => todoValue);
  };
  const handleClick = () => {
    AddTodos({
      title: addTodo,
      strike: false,
    })
  };
  return (
    <div className="addCont">
      <input
        type="text"
        required
        placeholder="Add new Todo"
        onChange={handleChange}
        value={addTodo}
      />
      <button onClick={handleClick} className="addBtn">
        Add
      </button>
    </div>
  );
};

export default AddTodo;
