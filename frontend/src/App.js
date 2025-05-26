import { Routes, Route } from "react-router-dom";
import VenueList from "./components/VenueList/VenueList.js";
import FixDate from "./components/Date/FixDate.js"
import TimeSlot from "./components/TimeSlot/TimeSlot.js";
import UserInfo from "./components/UserInfo/UserInfo.js";
import "../src/App.css"

function App() {
  return (
    <div className="background-container">
      <Routes>
        <Route path="/" element={<VenueList/>} />
        <Route path="/Date" element={<FixDate/>} />
        <Route path="/Time" element={<TimeSlot/>} />
        <Route path="/userinfo" element={<UserInfo/>} />
      </Routes>
      </div>
  );
}

export default App
