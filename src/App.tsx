import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./components/homepage";
import { NathulaTouren } from "./components/tour";
import { ChatBot, Navigation } from "./components/common";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tour/nathula-sharing-tour" element={<NathulaTouren />} />
      </Routes>
      <ChatBot />
    </Router>
  );
}

export default App;
