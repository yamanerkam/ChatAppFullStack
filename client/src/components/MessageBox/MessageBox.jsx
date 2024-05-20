import React from 'react'
import './MessageBox.css'
import { FaPlus } from "react-icons/fa";


export default function MessageBox() {
    return (
        <div className='messageBox'>
            <input placeholder='Type a message...' type="text" />
            <button className='plus-btn'><FaPlus size={20} />
            </button>
        </div>
    )
}
