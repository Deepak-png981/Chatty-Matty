import React from "react";
import "./SidebarChat.css";

export default function SidebarChat({ addNewChat }) {
  return !addNewChat ? (
    <div className="sidebarChat">
      <img
        src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png"
        alt=""
      />
      <div className="sidebarChatInfo">
        <h2>code room</h2>
        <p>This is message</p>
      </div>
    </div>
  ) : (
    <div className="sidebarChat">
      <h3>Add New Chat</h3>
    </div>
  );
}