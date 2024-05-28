import React, { useContext, useEffect, useState } from 'react'
import './Room.css'
import { useParams } from "react-router-dom";
import { io } from 'socket.io-client';
import { FaPlus } from "react-icons/fa";
import AuthContext from '../../context/AuthContext';
const socket = io('http://192.168.1.3:3001', { transports: ['websocket'], jsonp: false, forceNew: true, })
import axios from 'axios'

export default function Room() {
    const { user } = useContext(AuthContext)
    const userName = user.displayName
    const userUID = user.uid
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const messagesDB = await axios.get('http://192.168.1.3:3001/messages')
                console.log(messagesDB)
            } catch (err) {
                console.log(err)

            }

        }
        fetchMessages()
    }, [])


    const { id } = useParams()
    const handleClick = (e) => {

        e.preventDefault()
        const mes = { body: message, from: socket.id, userName, userUID }
        socket.emit('sendMessage', mes, id)
        setMessages(state => [mes, ...state])
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
        setMessages(state => [data, ...state])
        console.log(messages)

    }

    return (

        <div>

            {id} room
            <ul className='list'>
                {messages && messages.map((msg, index) => (
                    <li key={index}>
                        <strong>{msg.from.substring(0, 4)} {msg.userName} :
                        </strong>
                        {' '}
                        {msg.body}

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
