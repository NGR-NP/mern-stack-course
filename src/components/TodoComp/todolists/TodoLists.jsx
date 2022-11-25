import React, { useState } from "react";
import "./todolists.css";

const TodoLists = ({ todoLists }) => {
  const [done, setDone] = useState(false);
  const crossTodo = () => {
    setDone((prev) => !prev);
  };
  return (
    <div className="sec Cont">
      {todoLists.map((todo, index) => (
        <div className="lists">
          <p
            key={index}
            style={
              done
                ? { cursor: "not-allowed", textDecoration: "red line-through" }
                : { cursor: "pointer" }
            }
            onClick={crossTodo}
          >
            {todo.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TodoLists;
