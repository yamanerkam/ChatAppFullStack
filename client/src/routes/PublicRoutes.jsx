import { Outlet, Navigate } from 'react-router-dom'
import React, { useContext } from "react";
import AuthProvider from '../context/AuthContext';

const PublicRoutes = () => {
    const { user, isAuthenticated } = useContext(AuthProvider)
    console.log(user)

    return (
        isAuthenticated ? <Navigate to='/chatrooms' /> : <Outlet />
    )
}

export default PublicRoutes;