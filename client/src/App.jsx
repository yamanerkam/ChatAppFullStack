import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import ChatRoom from './pages/ChatRooms/ChatRoom';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <>


      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chatrooms" element={<ChatRoom />} />
        <Route path="*" element={<NotFound />} />

      </Routes>


    </>
  )
}

export default App
