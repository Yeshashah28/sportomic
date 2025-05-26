import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";

function FixDate() {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

   const isTodayOrFuture = (date) => {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const checkDate = new Date(date);
    checkDate.setHours(0, 0, 0, 0);
    return checkDate >= today;
  };

  const handleChange = (date) => {
    if (!isTodayOrFuture(date)) {
      alert("Please select today’s date or a future date.");
      return;
    }
    setSelectedDate(date);
    localStorage.setItem('selectedDate',date);

    axios.post("http://localhost:5000/api/date", { date }).then((response) => {console.log("Response from backend:", response.data);}).catch((error) => {console.error("Error posting date:", error);});
    navigate("/Time");
  };

  return (
    <div className="text-container">
      <label>Select Date</label><br/>
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="yyyy-MM-dd"
        placeholderText="Click to select a date"
       
      />
    </div>
  );
}

export default FixDate;
