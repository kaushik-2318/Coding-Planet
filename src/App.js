import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import Form from './Components/Form';
import Button from './Components/Button';
import MuchMore from './Components/MuchMore';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<HomePage />}/>
        <Route path="/Login" element={<LoginPage />}/>
        <Route path="/form" element={<Form />}/>
        <Route path="/button" element={<Button/>}/>
        <Route path="/muchmore" element={<MuchMore/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
