import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ isLoggedIn, children }) {
    console.log("PrivateRoute isLoggedIn:", isLoggedIn); // Debugging PrivateRoute

    return isLoggedIn ? children : <Navigate to="/login" />;
}
export default PrivateRoute;
