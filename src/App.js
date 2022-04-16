import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Header/Header";

import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Services from "./Pages/Home/Services/Services";
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
