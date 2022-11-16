import Registration from './sections/Registration'
import Todo from './sections/Todo'
import {
    Routes,
    Route
} from "react-router-dom";
const Rout = () => {
    return (
        <Routes>
            <Route path='*' element={<div>MERN-STACK</div>}/>
            <Route path='/register' element={<Registration />} />
            <Route path='/todo' element={<Todo />} />
        </Routes>
    )
}

export default Rout