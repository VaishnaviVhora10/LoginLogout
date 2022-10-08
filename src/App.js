import './App.css';
import GetPost from './Components/GetPost';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import CreatePost from './Components/CreatePost';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">                                           
      <Router>
        <Routes>
        <Route exact path='/' element={<SignUp/>} />
        <Route exact path='/Login' element={<Login/>} />
        <Route exact path='/GetPost' element={<GetPost/>} />
        <Route exact path='/CreatePost' element={<CreatePost/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
