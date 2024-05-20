import React, { createContext, useEffect, useState } from "react";
import { auth, provider } from "../firebase/config";
import { signInWithPopup, signOut } from 'firebase/auth';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [isAuthenticated, setIsAuthenticated] = useState(
        () => localStorage.getItem('user') === 'true' || false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
        return () => unsubscribe();
    }, []);

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
            setIsAuthenticated(true)
            localStorage.setItem('user', true);
        } catch (error) {
            console.error("Error signing in with Google:", error);
        }
    };

    const signOutUser = async () => {
        try {
            await signOut(auth);
            setUser(null);
            setIsAuthenticated(false)
            localStorage.setItem('user', false);
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle, signOutUser, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;