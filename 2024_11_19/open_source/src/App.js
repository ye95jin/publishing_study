import React from "react";
import VideoPlayer from "./component/VideoPlayer";
import "./css/style.css"; 

const App = () => {
  return (
    <div>
      <h1 className="title">basic :: Frontend Coding Test</h1>
      <VideoPlayer />
    </div>
  );
};

export default App;