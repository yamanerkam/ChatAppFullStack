import React, { useState } from 'react'
import './ChatRoom.css'
import ChatCard from '../../components/ChatCard/ChatCard'
import { FaPlus } from "react-icons/fa";


export default function () {

    const [newRoomName, setNewRoomName] = useState('')

    function handleClick(e) {
        e.preventDefault()
        console.log(newRoomName)
    }

    return (
        <div className='rooms'>

            <h1>Chat Rooms</h1>
            <div >
                <form onSubmit={((e) => handleClick(e))} className="container" action="">
                    <input value={newRoomName} onChange={((e) => setNewRoomName(e.target.value))} type="text" placeholder='Create a new room' className="input-field" />
                    <button
                        type='submit'
                        className="create-button">

                        <FaPlus className="icon" /> <span>Create
                        </span>


                    </button>
                </form>

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
