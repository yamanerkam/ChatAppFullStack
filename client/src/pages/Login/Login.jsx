import React from 'react'
import './Login.css'


export default function Login() {
    return (
        <div className='login'>
            <div className='shape top-left'></div>
            <h1>CHAT APP</h1>
            <button> <img src="https://cdn.iconscout.com/icon/free/png-256/google-152-189813.png" width={30} height={30} alt="" /><p>Login with Google</p></button>
            <div className='shape bottom-right'></div>
        </div>
    )
}
