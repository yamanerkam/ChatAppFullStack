import React from 'react'
import './Room.css'
import { useParams } from "react-router-dom";
import MessageBox from '../../components/MessageBox/MessageBox';

export default function Room() {
    const { id } = useParams()
    return (
        <div>{id} room
            <MessageBox /></div>
    )
}
