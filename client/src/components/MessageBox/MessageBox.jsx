import React from 'react'
import './MessageBox.css'
export default function MessageBox() {
    return (
        <div className='messageBox'>
            <input placeholder='Type a message...
' type="text" />
            <button>send</button>
        </div>
    )
}
