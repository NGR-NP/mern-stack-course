import { useState } from "react";
import "./addcont.css";
import Abeysale from "../../../image/abey-sale.gif";
import Nahi from "../../../image/nahi.gif";
import chup from "../../../image/chup-bilkulchup.gif";
import bhag from "../../../image/chalbhag.gif";
import FbiRunning from "../../../image/fbirunning.gif";
import FbiOpenUp from "../../../image/fbiopenup.gif";
const AddTodo = ({ AddTodos }) => {
  const [todo, setTodo] = useState("");
  const [i, setI] = useState(0);
  const [gali, setGali] = useState("");
  const handleChange = (event) => {
    const todoValue = event.target.value;

    if (todoValue === "book" || todoValue === "read") {
      if (i <= 0) {
        setGali((_) => (
          <p
            style={{
              padding: "8px 14px",
              background: "black",
              borderRadius: "14px",
            }}
          >
            This word is alread in use
          </p>
        ));
      }
      console.log(i);
      if (i > 0 && i < 4) {
        setGali((_) => <img src={Nahi} width={i * 50 + "%"} alt="message" />);
      }
      if (i > 3 && i < 7) {
        setGali((_) => (
          <img src={Abeysale} width={i * 30 + "%"} alt="message" />
        ));
      }
      if (i > 6 && i < 10) {
        setGali((_) => <img src={chup} width={i * 30 + "%"} alt="message" />);
      }
      if (i > 9 && i < 13) {
        setGali((_) => (
          <img src={bhag} width={i * 15 + "%"} alt="message" />
        ));
      }
      if (i > 12 && i < 14) {
        setGali((_) => <img src={FbiRunning} width={i * 10 + "%"} alt="FBI" />);
      }
      if (i > 13) {
        setGali((_) => (
          <img src={FbiOpenUp} width={i * 25 + "%"} alt="FBI OPEN UP" />
        ));
      }
      setI((prev) => prev + 1);
      return;
    }
    setTodo((_) => todoValue);
  };
  const handleClick = () => {
    AddTodos({
      title: todo,
      strick: false,
    });
    setTodo((_) => []);
  };
  return (
    <div className="addCont">
      <input
        type="text"
        placeholder="Add new Todo"
        onChange={handleChange}
        value={todo}
      />
      <button onClick={handleClick} className="addBtn">
        Add
      </button>
      <div className="gali">{gali}</div>
    </div>
  );
};

export default AddTodo;
