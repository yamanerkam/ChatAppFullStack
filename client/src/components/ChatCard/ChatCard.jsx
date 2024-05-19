import React from 'react'
import './ChatCard.css'

export default function ChatCard(props) {
    return (
        <div className='chat-card'>
            <h1>{props.name}</h1>
            <button className='join-button'>Join</button>
        </div>
    )
}
