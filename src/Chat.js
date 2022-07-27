import React from "react";
import "./Chat.css";

export default function Chat() {
  return (
    <div className="chat">
      {/* --------------------------Chat Header -----------------------*/}
      <div className="chatHeader">
        <img
          src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png"
          alt=""
        />
        <div className="chatHeaderInfo">
          <h3>Room Name</h3>
          <p>Last seeen at .....</p>
        </div>
        <div className="chatHeaderRight">
          <button style={{ border: "none" }}>
            <span class="material-symbols-outlined">search</span>
          </button>
          <button style={{ border: "none" }}>
            <span class="material-symbols-outlined">attach_file</span>
          </button>
          <button style={{ border: "none" }}>
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </div>
      {/*--------------------- Chat Body---------------------------- */}
      <div className="chatBody">
        <p className="chatMessage">
          <span className="chatName">Rahul</span>
          Hello guys
          <span className="timestamp">06:46 PM</span>
        </p>
        <p className="chatMessage">
          <span className="chatName">Rahul</span>
          Hello guys
          <span className="timestamp">06:46 PM</span>
        </p>
        <p className="chatMessage chatReceiver">
          <span className="chatName">Rakesh</span>
          Hello guys
          <span className="timestamp">06:46 PM</span>
        </p>
      </div>
      {/* -------------------------chat footer------------------------- */}
      <div className="chatFooter">
        <span class="material-symbols-outlined">mood</span>
        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit" style={{ border: "none" }}>
            <span class="material-symbols-outlined">send</span>
          </button>
          <button style={{ border: "none" }}>
            <span class="material-symbols-outlined">mic</span>
          </button>
        </form>
      </div>
    </div>
  );
}