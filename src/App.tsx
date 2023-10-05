import React from "react";
import "animate.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";

const App: React.FC = () => {
  const bodyStyle = {
    backgroundColor: "#FFFEF3" /* 任意の背景色を設定 */,
  };

  return (
    <div style={bodyStyle}>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
