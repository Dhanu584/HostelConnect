// src/pages/Today.jsx
import React, { useState, useEffect } from "react";
import "../styles/Today.css";

export default function Today() {
  const [menu, setMenu] = useState([]);
  const [events, setEvents] = useState([]);

  // Get today's day name
  const todayName = new Date().toLocaleDateString("en-US", { weekday: "long" });

  useEffect(() => {
    // Load data from localStorage (set by Faculty and Committee)
    const weekMenu = JSON.parse(localStorage.getItem("weekMenu")) || {};
    const eventsList = JSON.parse(localStorage.getItem("eventsList")) || {};

    // Set today's data
    setMenu(weekMenu[todayName] || []);
    setEvents(eventsList[todayName] || []);
  }, []);

  return (
    <div className="today-container">
      {/* Left: Mess Menu Section */}
      <div className="menu-section">
        <h2>🍽️ Mess Menu ({todayName})</h2>
        <div className="menu-scroll">
          {menu.length > 0 ? (
            menu.map((item, i) => (
              <div key={i} className="menu-card">
                <img src={item.img} alt={item.meal} className="menu-img" />
                <h3>{item.meal}</h3>
                <p>{item.name}</p>
              </div>
            ))
          ) : (
            <p className="empty-text">No menu available for today.</p>
          )}
        </div>
      </div>

      {/* Right: Events Section */}
      <div className="events-section">
        <h2>📅 Today’s Events</h2>
        <div className="events-scroll">
          {events.length > 0 ? (
            events.map((event, i) => (
              <div key={i} className="event-card">
                <h3>{event.title}</h3>
                <p>{event.details}</p>
              </div>
            ))
          ) : (
            <p className="empty-text">No events scheduled today.</p>
          )}
        </div>
      </div>
    </div>
  );
}
