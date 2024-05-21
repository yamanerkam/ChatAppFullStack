import { Outlet, Navigate } from 'react-router-dom'
import React, { useContext } from "react";
import AuthProvider from '../context/AuthContext';

const PublicRoutes = () => {
    const { isAuthenticated } = useContext(AuthProvider)

    return (
        isAuthenticated ? <Navigate to='/chatrooms' /> : <Outlet />
    )
}

export default PublicRoutes;