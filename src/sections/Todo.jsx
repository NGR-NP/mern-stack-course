import Card from '../components/TodoComp/card/Card'
import TodoTitle from '../components/TodoComp/title/TodoTitle';

const Todo = () => {
  const AppTitle = "Todo App";

  return (
    <div className='Section'>
            <div className="main Cont">
                <TodoTitle title={AppTitle} />
                <Card/>
            </div>
        </div>
  )
}

export default Todo