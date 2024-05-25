import React, { useEffect, useState } from 'react'
import './Room.css'
import { useParams } from "react-router-dom";
import { io } from 'socket.io-client';
import { FaPlus } from "react-icons/fa";
const socket = io('http://192.168.1.3:3001', { transports: ['websocket'], jsonp: false, forceNew: true, })



export default function Room() {

    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    const { id } = useParams()
    const handleClick = (e) => {

        e.preventDefault()
        const mes = { body: message, from: socket.id }
        socket.emit('sendMessage', mes, id)
        setMessages(state => [mes, ...state])
        console.log(messages)

    }

    useEffect(() => {
        socket.emit('joinRoom', id);
        socket.on('sendMessage', receiveMessage)
        return () => {
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
                        <strong>{msg.from.substring(0, 4)}:
                        </strong>
                        {msg.body}

                    </li>
                ))}
            </ul>




            <form className='messageBox' onSubmit={handleClick}>

                <input
                    value={message}
                    onChange={((e) => setMessage(e.target.value))}
                    placeholder='Type a message...'
                    type="text" />


                <button type='submit' className='plus-btn'><FaPlus size={20} /></button>


            </form>



        </div>

    )
}
