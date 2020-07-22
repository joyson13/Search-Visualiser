import React from "react";
import BFS from "./BFS/BFS";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo center">
            Shortest Path Visualiser
          </a>
        </div>
      </nav>

      <BFS></BFS>
    </div>
  );
}

export default App;
