import logo from './logo.svg';
import './App.css';
import AddCustomer from './component/AddCustomer';
import Search from './component/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Offers from './component/Offers';

function App() {
  return (
    <BrowserRouter>
    <Routes>


<Route path='/' element={<AddCustomer/>}  />
<Route  path='/search' element={<Search/>} />
<Route path='/home' element={<Home/>} />
<Route path='/offers' element={<Offers/>} />
    </Routes>
      
      </BrowserRouter>
  );
}

export default App;
