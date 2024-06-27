import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import PrivateRoute from "./components/PrivateRouter";
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="w-screen h-screen bg-gray-900 flex flex-col">
            <Navbar
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
            ></Navbar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route
                    path="login"
                    element={<Login setIsLoggedIn={setIsLoggedIn}></Login>}
                ></Route>
                <Route
                    path="signup"
                    element={<Signup setIsLoggedIn={setIsLoggedIn}></Signup>}
                ></Route>
                <Route
                    path="dashboard"
                    element={
                        <PrivateRoute isLoggedIn={isLoggedIn}>
                            <Dashboard></Dashboard>
                        </PrivateRoute>
                    }
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
