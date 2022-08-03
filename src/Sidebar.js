import React,{useEffect , useState} from 'react'
import "./Sidebar.css";
// importing the dp image
import man from './img/man.png'
import SidebarChat from "./SidebarChat";
import {db} from './firebase';
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore"; 
export default function Sidebar() {

  const[group , setGroup] = useState([]);


  const getGroups = async()=>{
    const getData = onSnapshot(collection(db , "groups"), (snapshot)=>{
      let list = [];
      snapshot.docs.forEach((doc)=>{
        list.push({
          id : doc.id,
          ...doc.data()
        })
      });
      setGroup(list);
    }); 
  
  };
  useEffect(()=>{
    getGroups();
  },[])
  return (
    <div className='sideBar'>
            {/*--------------------------- Header------------------------- */}
      <div className="sidebarHeader">
        <div>
          <img src={man} alt="" />
        </div>
        <div className="sidebarHeaderRight">
          <button style={{ border: "none" }}>
            <span className="material-symbols-outlined">
              arrow_drop_down_circle
            </span>
          </button>
          <button style={{ border: "none" }}>
            <span className="material-symbols-outlined">more_vert</span>
          </button>
          <button style={{ border: "none" }}>
            <span className="material-symbols-outlined">chat</span>
          </button>
        </div>
      </div>
      {/* --------------------------sidebar Search--------------------- */}
      <div className="sidebarSearch">
        <div className="sidebarSearchContainer">
          <span className="material-symbols-outlined">search</span>
          <input type="text" placeholder="Search contact" />
        </div>
      </div>
      {/* ---------------------------Sidebar chats--------------------- */}
      <div className="sidebarChats">
        <SidebarChat addNewChat />
        {
          group.map((group)=>{
            return <SidebarChat key = {group.id} name = {group.name} id = {group.id} />
          })
        }
      </div>
    </div>
  )
}
