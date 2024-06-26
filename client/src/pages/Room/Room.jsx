import React, { useContext, useEffect, useState } from 'react'
import './Room.css'
import { useParams } from "react-router-dom";
import { io } from 'socket.io-client';
import { FaPlus } from "react-icons/fa";
import AuthContext from '../../context/AuthContext';
const socket = io('http://192.168.1.108:3001', { transports: ['websocket'], jsonp: false, forceNew: true, })
import axios from 'axios'

export default function Room() {
    const { id } = useParams()
    const { user } = useContext(AuthContext)
    const userName = user.displayName
    const userUID = user.uid
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [room, setRoom] = useState('')



    useEffect(() => {
        const fetchMessages = async (id) => {
            try {
                const [messagesDB, roomData] = await Promise.all([
                    axios.get(`http://192.168.1.108:3001/messages/${id}`),
                    axios.get(`http://192.168.1.108:3001/rooms/${id}`)
                ])
                console.log(messagesDB.data)
                console.log(roomData.data[0])
                setMessages(messagesDB.data);
                setRoom(roomData.data[0])
            } catch (err) {
                console.log(err)

            }

        }
        fetchMessages(id)
    }, [])


    const handleClick = (e) => {

        e.preventDefault()
        const mes = { msg: message, userName, userUID }
        socket.emit('sendMessage', mes, id)
        setMessages(state => [...state, mes])
        console.log(messages)
        setMessage('')

    }

    useEffect(() => {
        socket.emit('joinRoom', id);
        socket.on('sendMessage', receiveMessage)
        return () => {
            socket.emit('leaveRoom', id);
            socket.off('sendMessage', receiveMessage)
        }
    }, [id])

    const receiveMessage = (data) => {
        setMessages(state => [...state, data]);
        console.log(messages)

    }

    return (

        <div className='chat-container'>

            {room && (<h1>Room name: {room.name}</h1>)}
            <ul className='list'  >
                {messages && messages.map((msg, index) => (
                    <li className={`message ${msg.userUID === user.uid ? 'my-message' : 'other-message'}`} key={index}>
                        <strong> {msg.userName} :
                        </strong>
                        {' '}
                        {msg.msg}

                    </li>
                ))}
            </ul>

            <form className='messageBox' onSubmit={handleClick}>

                <input
                    value={message}
                    required
                    onChange={((e) => setMessage(e.target.value))}
                    placeholder='Type a message...'
                    type="text" />


                <button type='submit' className='plus-btn'><FaPlus size={20} /></button>


            </form>



        </div>

    )
}
