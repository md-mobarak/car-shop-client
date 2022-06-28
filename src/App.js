import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Banner from './component/Banner/Banner';
import Home from './component/Home/Home';


function App() {
  return (
    <div >
      <Navbar></Navbar>
      <h1 className='text-center text-white font-bold lg:text-4xl bg-accent py-4 uppercase'>Branding Car Shop </h1>
      <Home></Home>
    </div>
  );
}

export default App;
