import React, { useState } from 'react'
import './ChatRoom.css'
import ChatCard from '../../components/ChatCard/ChatCard'
import { FaPlus } from "react-icons/fa";


export default function () {
    const [newRoomName, setNewRoomName] = useState('')
    function handleClick() {
        console.log(newRoomName)
        setNewRoomName('')
    }
    return (
        <div className='rooms'>

            <h1>Chat Rooms</h1>
            <div className="container">
                <input value={newRoomName} onChange={((e) => setNewRoomName(e.target.value))} type="text" placeholder='Create a new room' className="input-field" />
                <button onClick={((e) => handleClick())} className="create-button">
                    <FaPlus className="icon" /> <span>Create
                    </span>
                </button>
            </div>


            <div className='cards'>
                <ChatCard name='kam' />
                <ChatCard name='kam' />
                <ChatCard name='kam' />
                <ChatCard name='kam' />
                <ChatCard name='kam' />
                <ChatCard name='kam' />
                <ChatCard name='kam' />
                <ChatCard name='kam' />
                <ChatCard name='kam' />
                <ChatCard name='kam' />
                <ChatCard name='kam' />
                <ChatCard name='kam' />
                <ChatCard name='kam' />
                <ChatCard name='kam' />
                <ChatCard name='kam' />
                <ChatCard name='kam' />
                <ChatCard name='kam' />
                <ChatCard name='kam' />
                <ChatCard name='kam' />
                <ChatCard name='kam' />
                <ChatCard name='kam' />

            </div>
        </div>
    )
}
