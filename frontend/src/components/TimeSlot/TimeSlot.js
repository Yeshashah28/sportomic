import React, { useState } from "react";
import { Button, Container, Row, Col, Alert } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "../TimeSlot/TimeSlot.css";

const timeSlots = [
  "08:00 AM-09:00 AM", "09:00 AM-10:00 AM", "10:00 AM-11:00 AM", "11:00 AM-12:00 PM",
  "12:00 PM-01:00 PM", "01:00 PM-02:00 PM", "02:00 PM-03:00 PM", "03:00 PM-04:00 PM",
  "04:00 PM-05:00 PM", "05:00 PM-06:00 PM","06:00 PM-07:00 PM","07:00 PM-08:00 PM"
];

export default function TimeSlotSelector() {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const navigate=useNavigate();
  const handleSelect = async(slot) => {
    setSelectedSlot(slot);
    localStorage.setItem('selectedTime',slot);
    const venue=localStorage.getItem('selectedVenue');
    const date=localStorage.getItem('selectedDate');
    try {
      const response=await axios.post("http://localhost:5000/api/time",{venue,date,slot});
      console.log(response.data);
      navigate("/Userinfo");
    } catch (error) {
      alert("This time slot is already booked. Please choose another.");
      return;
    }
    
  };

  return (
    <div className="text-container">
    <Container className="my-4">
      <h3 className="mb-3">Select a Time Slot</h3>
      <Row>
        {timeSlots.map((slot) => (
          <Col xs={12} className="mb-2" key={slot}>
            <Button
              variant={selectedSlot === slot ? "primary" : "outline-dark"}
              onClick={() => handleSelect(slot)}
              className="w-100"
            >
              {slot}
            </Button>
          </Col>
        ))}
      </Row>
      {selectedSlot && (
        <Alert variant="success" className="mt-4">
          You selected: <strong>{selectedSlot}</strong>
        </Alert>
      )}
    </Container>
    </div>
  );
}
