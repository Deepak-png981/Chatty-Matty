import React from 'react'
import "./App.css";
import Chat from './Chat';
import Sidebar from './Sidebar';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
    <div className='app'>
      <div className='appBody'>
      <Sidebar/>
      <Routes>
        <Route path = "/" element = {<Chat/>}></Route>
        <Route path = "/group/groupID" element = {<Chat/>}></Route>
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}
