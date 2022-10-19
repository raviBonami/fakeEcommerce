
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Startup from './components/startup/Startup';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import User from './components/user/User';
import About from './components/welcome/about/About'
import Home from './components/welcome/home/Home'
import Contact from './components/welcome/contact/Contact'
import Cart from './components/cart/Cart'

function App() {


  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Startup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/user' element={<User />} />
        <Route path='/user/home' element={<User />} />
        <Route path='/user/contact' element={<Contact />} />
        <Route path='/user/about' element={<About />} />
        <Route path='/user/cart' element={<Cart />} />
        
      </Routes>




    </div>
  );
}

export default App;
