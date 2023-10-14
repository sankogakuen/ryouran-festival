import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "animate.css";

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const bodyStyle = {
    backgroundColor: "#FFFEF3" /* 任意の背景色を設定 */,
  };

  return (
    <Router>
      <div style={bodyStyle}>
        <Navbar />
        <Home />
      </div>
    </Router>
  );
};

export default App;
