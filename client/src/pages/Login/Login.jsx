import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
    return (
        <div className='login'>
            <div className='shape top-left'></div>
            <h1>CHAT APP</h1>
            <button onClick={((e) => navigate('/chatrooms'))}> <img src="https://cdn.iconscout.com/icon/free/png-256/google-152-189813.png" width={30} height={30} alt="" /><p>Login with Google</p></button>
            <div className='shape bottom-right'></div>
        </div>
    )
}
