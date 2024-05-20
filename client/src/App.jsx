import { useState } from 'react'
import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";
import Login from './pages/Login/Login';
import ChatRoom from './pages/ChatRooms/ChatRoom';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Room from './pages/Room/Room';
import PublicRoutes from './routes/PublicRoutes';
import ProtectedRoutes from './routes/ProtectedRoutes';

function App() {
  const location = useLocation();
  const shouldShowNavbar = location.pathname !== '/';
  return (
    <>


      {shouldShowNavbar && <Navbar />}
      <Routes>

        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Login />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/chatrooms" element={<ChatRoom />} />
          <Route path="/room/:id" element={<Room />} />
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>


    </>
  )
}

export default App
