
import './App.css';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path="/" Component={Signup}></Route>
        <Route path="/login" Component={Login}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
