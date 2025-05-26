import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "../VenueList/VenueList.css"


const venues = [
  "National Stadium",
  "Greenfield Ground",
  "City Sports Complex",
  "Lakeside Arena",
  "Downtown Gymnasium",
];

export default function VenueList({ onSelectVenue }) {
  const [selectedVenue, setSelectedVenue] = useState("");
  const navigate=useNavigate();

  const handleChange = (e) => {
    const venue = e.target.value;
    setSelectedVenue(venue);
    localStorage.setItem('selectedVenue', venue);
    axios.post("http://localhost:5000/api/venue",{venue}).then((response)=>{console.log(response.data)}).catch((error)=>{console.log(error)});
    navigate("/Date");
  };

  return (
    <div className="text-container">
    <Form.Group controlId="venueSelect" className="mb-4">
      <Form.Label>Select Venue</Form.Label>
      <Form.Select value={selectedVenue} onChange={handleChange}>
        <option value="">-- Choose a venue --</option>
        {venues.map((venue, index) => (
          <option key={index} value={venue}>
            {venue}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
    </div>
  );
}