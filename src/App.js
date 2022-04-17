import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Header/Header";

import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Services from "./Pages/Home/Services/Services";
import Home from "./Pages/Home/Home/Home";
import Asia from "./Pages/Home/Services/Asia/Asia";
import Africa from "./Pages/Home/Services/Africa/Africa";
import Europe from "./Pages/Home/Services/Europe/Europe";
import CheckOut from "./Pages/Home/Services/CheckOut/CheckOut";
import RequireAuth from "../src/RequireAuth/RequireAuth";
import Footer from "./Pages/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/asia" element={<Asia />} />
        <Route path="/africa" element={<Africa />} />
        <Route path="/europe" element={<Europe />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
