import React from "react";
import "./App.css";
import "./features/features.scss";
import ChatRouter from "./routers/chat-router";

function App() {
  return (
    <div className="App">
      <ChatRouter />
    </div>
  );
}

export default App;
