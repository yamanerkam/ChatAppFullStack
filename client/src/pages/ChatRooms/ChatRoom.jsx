import React, { useState } from 'react'
import './ChatRoom.css'
import ChatCard from '../../components/ChatCard/ChatCard'
import { FaPlus } from "react-icons/fa";
import { io } from "socket.io-client";
const socket = io('http://192.168.1.3:3001', { transports: ['websocket'], jsonp: false, forceNew: true, })


export default function () {
    const [newRoomName, setNewRoomName] = useState('')

    function handleClick(e) {
        e.preventDefault()
        console.log(newRoomName)
        //socket.emit('joinRoom', (newRoomName))

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
