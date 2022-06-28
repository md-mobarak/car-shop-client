import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Banner from './component/Banner/Banner';
import Home from './component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import CarDetails from './component/CarDetails/CarDetails';
import Login from './component/Login/Login';
import SignUp from './component/Login/SignUp';


function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/carDetails/:id' element={<CarDetails></CarDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
