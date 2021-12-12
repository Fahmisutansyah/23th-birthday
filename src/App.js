import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//routes
import Home from "./routes/Home";
import Personalized from "./routes/Personalized";
import Ticket from "./routes/Ticket";

import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/planning" element={<Personalized />} />
        <Route exact path="/yourticket" element={<Ticket />} />
      </Routes>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
