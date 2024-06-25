import "./App.css";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="App">
            <Navbar
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
            ></Navbar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="login" element={<Login></Login>}></Route>
                <Route path="signup" element={<Signup></Signup>}></Route>
                <Route path="dashboard" element={<Dashboard />}></Route>
            </Routes>
        </div>
    );
}

export default App;
