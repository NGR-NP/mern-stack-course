import Card from "../components/todo/card/Card";
import TodoTitle from "../components/todo/title/TodoTitle";
import '../style/Registration.css';
const Todo = () => {
  const AppTitle = "Todo App";

  return (
    <div className="Section">
      <div className="main Cont">
        <TodoTitle title={AppTitle} />
        <Card />
      </div>
    </div>
  );
};

export default Todo;
