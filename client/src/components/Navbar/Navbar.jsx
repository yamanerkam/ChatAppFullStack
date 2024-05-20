import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css'
import { VscSignOut } from "react-icons/vsc";
import AuthProvider from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate()
    const { user, signOutUser } = useContext(AuthProvider)
    console.log(user)
    function signOut() {
        signOutUser()
        navigate('/')

    }


    return (
        <div className='navbar'>
            <div className="user">
                {user && (<>

                    <img className='picture' src={user.photoURL} alt="userPic" />

                    <div className="userInfo">
                        <div className="name">{user.displayName}</div>
                        <div className="email">{user.email}</div>
                    </div>

                </>

                )}
            </div>

            <button onClick={((e) => signOut())} className='sign-out'><VscSignOut size={24} />
            </button>
        </div>
    )
}
