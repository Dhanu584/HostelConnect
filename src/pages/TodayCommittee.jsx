// src/pages/TodayCommittee.jsx
import React, { useState, useEffect } from "react";
import "../styles/TodayCommittee.css";

export default function TodayCommittee() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const [eventsList, setEventsList] = useState({});
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("eventsList")) || {};
    setEventsList(savedEvents);
  }, []);

  const handleAddEvent = () => {
    if (!title || !details) return alert("Please fill all fields!");
    const updatedEvents = {
      ...eventsList,
      [selectedDay]: [...(eventsList[selectedDay] || []), { title, details }],
    };
    setEventsList(updatedEvents);
    localStorage.setItem("eventsList", JSON.stringify(updatedEvents));
    setTitle("");
    setDetails("");
  };

  return (
    <div className="committee-container">
      <h2>📅 Manage Weekly Events</h2>

      <div className="committee-controls">
        <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
          {days.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Event Details (Venue, Time, etc.)"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>

      <div className="week-display">
        {days.map((day) => (
          <div key={day} className="day-card">
            <h3>{day}</h3>
            {(eventsList[day] || []).length > 0 ? (
              eventsList[day].map((event, i) => (
                <div key={i} className="event-item">
                  <p>
                    <b>{event.title}</b> — {event.details}
                  </p>
                </div>
              ))
            ) : (
              <p className="empty-text">No events yet</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
