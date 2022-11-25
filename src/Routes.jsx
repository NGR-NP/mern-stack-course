import Registration from './sections/Registration'
import Todo from './sections/Todo'
import {
    Routes,
    Route,
} from "react-router-dom";
const Rout = () => {
    return (
        <Routes>
            <Route path='*' element={<div>page not found</div>}/>
            <Route path='/' element={<Todo />} />
            <Route path='/register' element={<Registration />} />
        </Routes>
    )
}

export default Rout