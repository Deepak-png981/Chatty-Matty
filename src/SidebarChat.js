import React from "react";
import "./SidebarChat.css";
import { collection, addDoc } from "firebase/firestore"; 
import {db} from './firebase';

export default function SidebarChat({ addNewChat , name , id }) {
  console.log(name , id);
  const createChat = async()=>{
    const group = prompt("Please Enter your GROUP NAME");
    try {
      const docRef = await addDoc(collection(db, "groups"), {
        name : group,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return !addNewChat ? (
    <div className="sidebarChat">
      <img
        src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png"
        alt=""
      />
      <div className="sidebarChatInfo">
        <h2>{name}</h2>
        <p>{id}</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h3>Add New Chat</h3>
    </div>
  );
}