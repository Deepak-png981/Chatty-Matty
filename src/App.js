import React from 'react'
import "./App.css";
import Chat from './Chat';
import Sidebar from './Sidebar';
export default function App() {
  return (
    <div className='app'>
      <div className='appBody'>
      <Sidebar/>
      <Chat/>
      </div>
    </div>
  )
}
