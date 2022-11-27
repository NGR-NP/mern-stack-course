import React from "react";
import PendingTodo from "../pendingtodo/PendingTodo";
import "./todolists.css";

const TodoLists = ({ todoLists, pending, todoStrike }) => {
  const todoCross = (index) => {
    todoStrike(index)
  };
  return (
    <div className="sec Cont">
      {todoLists.map((todo, index) => (
        <div
          className="lists"
          style={
            todo.strike
              ? {
                  cursor: "not-allowed",
                  textDecoration: "red line-through",
                  textDecorationThickness: "6px",
                }
              : { cursor: "pointer" }
          }
          onClick={() =>todoCross(index)}
          key={index}
        >
          {todo.title}
        </div>
      ))}
      <PendingTodo pending={pending} />
    </div>
  );
};

export default TodoLists;
