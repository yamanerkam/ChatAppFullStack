import { useContext } from "react";
import AuthProvider from "../context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
    const { user, isAuthenticated } = useContext(AuthProvider)
    console.log(user)
    return (
        isAuthenticated ? <Outlet /> : <Navigate to='/' />
    )
}

export default ProtectedRoutes
