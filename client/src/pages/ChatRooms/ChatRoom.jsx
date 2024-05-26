import React, { useState } from 'react'
import './ChatRoom.css'
import ChatCard from '../../components/ChatCard/ChatCard'
import { FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function () {
    const [rooms, setRooms] = useState([])
    const [newRoomName, setNewRoomName] = useState('')
    const navigate = useNavigate()

    function handleClick(e) {
        e.preventDefault()
        console.log(newRoomName)
        const newRoom = {
            name: newRoomName,
            ID: '43463654635'
        }
        setRooms(state => [newRoom, ...state])
        setNewRoomName('')
        console.log(rooms)
    }

    return (
        <div className='rooms'>

            <h1>Chat Rooms</h1>
            <div >
                <form onSubmit={((e) => handleClick(e))} className="container" action="">
                    <input required value={newRoomName} onChange={((e) => setNewRoomName(e.target.value))} type="text" placeholder='Create a new room' className="input-field" />
                    <button
                        type='submit'
                        className="create-button">

                        <FaPlus className="icon" /> <span>Create
                        </span>


                    </button>
                </form>

            </div>


            <div className='cards'>
                <ChatCard ID={'123'} name={'kam'}></ChatCard>
                <ChatCard ID={'456'} name={'parker'}></ChatCard>
                {rooms && rooms.map((room, index) => (
                    <ChatCard onClick={((e) => navigate(`/room/${room.ID}`))} key={index} name={room.name} ID={room.ID}></ChatCard>
                ))}
            </div>
        </div >
    )
}
