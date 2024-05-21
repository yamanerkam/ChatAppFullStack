import { useContext } from "react";
import AuthProvider from "../context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
    const { isAuthenticated } = useContext(AuthProvider)
    return (
        isAuthenticated ? <Outlet /> : <Navigate to='/' />
    )
}

export default ProtectedRoutes
