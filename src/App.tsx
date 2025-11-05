import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./components/homepage";
import { NathulaTouren } from "./components/tour";
import { ChatBot, Navigation } from "./components/common";
import CabsPage from "../app/cabs/page";
import BikePage from "../app/bikes/page";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tour/nathula-sharing-tour" element={<NathulaTouren />} />
        <Route path="/cabs" element={<CabsPage/>}></Route>
        <Route path="/bikes" element={<BikePage/>}></Route>
      </Routes>
      <ChatBot />
    </Router>
  );
}

export default App;
