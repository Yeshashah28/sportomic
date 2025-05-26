import React, { useState } from "react";
import "./UserInfo.css"

function UserDetailsForm() {
  const venue = localStorage.getItem('selectedVenue');
  const date = localStorage.getItem('selectedDate');
  const time = localStorage.getItem('selectedTime');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    venue:venue,
    date:date,
    time:time,
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Example: send data to backend API
    try {
      const response = await fetch("http://localhost:5000/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        alert("User saved successfully!");
        console.log(data);
      } else {
        alert("Failed to save user.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error saving user.");
    }
  };

  return (
    <div className="text-container">
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label><br/>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Email:</label><br/>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Contact:</label><br/>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default UserDetailsForm;
