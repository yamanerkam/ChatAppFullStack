import React, { useState, useEffect, useContext } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import AuthProvider from '../../context/AuthContext'


export default function Login() {
    const navigate = useNavigate()
    const { signInWithGoogle } = useContext(AuthProvider)

    function signUp() {
        signInWithGoogle()
        navigate('/chatrooms')
    }


    return (
        <div className='login'>
            <div className='shape top-left'></div>
            <h1>CHAT APP</h1>
            <button onClick={((e) => signUp())}> <img src="https://cdn.iconscout.com/icon/free/png-256/google-152-189813.png" width={30} height={30} alt="" /><p>Login with Google</p></button>
            <div className='shape bottom-right'></div>
        </div >
    )
}
