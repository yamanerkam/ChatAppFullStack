import React from 'react'
import './ChatCard.css'
import { useNavigate } from 'react-router-dom'


export default function ChatCard(props) {
    const navigate = useNavigate()
    return (
        <div className='chat-card'>
            <h1>{props.name}</h1>
            <button onClick={((e) => navigate(`/room/${props.ID}`))} className='join-button'>Join</button>
        </div >
    )
}
