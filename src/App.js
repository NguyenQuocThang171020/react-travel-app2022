import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Register from './components/Register/Register'
import Login from './components/login/Login'
import Tour from './components/Tour/Tour'
import Hotel from './components/Hotel/Hotel'
import Detail from "./components/Detail/Detail";
import Order from './components/Order/Order'
import Admin from './components/admin/Admin'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/tour" element={<Tour/>} />
        <Route path="/hotel/:id" element={<Hotel/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/order/:id" element={<Order/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
