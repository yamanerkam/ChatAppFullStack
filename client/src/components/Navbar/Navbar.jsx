import React from 'react'
import './Navbar.css'
import Van from './van.jpeg'
import { VscSignOut } from "react-icons/vsc";

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="user">
                <img className='picture' src={Van} alt="userPic" />
                <div className="userInfo">
                    <div className="name">Erkam Yaman</div>
                    <div className="email">erkamyaman35@gmail.com</div>
                </div>
            </div>

            <button className='sign-out'><VscSignOut size={24} />
            </button>
        </div>
    )
}
