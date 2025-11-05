import React from "react";
import "../styles/Today.css";

// Import images from assets folder
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

export default function Today() {
  const menu = [
    { id: 1, meal: "Breakfast", name: "Pancakes & Juice", img: image1 },
    { id: 2, meal: "Lunch", name: "Rice & Curry", img: image2 },
    { id: 3, meal: "Dinner", name: "Pasta & Salad", img: image3 },
  ];

  const events = [
    { id: 1, title: "Cultural Fest Meeting", details: "Venue: Auditorium | Time: 6 PM" },
    { id: 2, title: "Tech Workshop", details: "Topic: AI & Web Dev | Venue: Lab 3" },
    { id: 3, title: "Dance Practice", details: "Venue: Hall 2 | Time: 7 PM" },
    { id: 4, title: "Clean Campus Drive", details: "Meeting Point: Hostel Gate | 9 AM" },
    { id: 5, title: "Club Collaboration Meet", details: "Venue: Conference Room | 5 PM" },
  ];

  return (
    <div className="today-container">
      {/* Left: Mess Menu Section */}
      <div className="menu-section">
        <h2>🍽️ Mess Menu</h2>
        <div className="menu-scroll">
          {menu.map((item) => (
            <div key={item.id} className="menu-card">
              <img src={item.img} alt={item.meal} className="menu-img" />
              <h3>{item.meal}</h3>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Events Section */}
      <div className="events-section">
        <h2>📅 Upcoming Events</h2>
        <div className="events-scroll">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <h3>{event.title}</h3>
              <p>{event.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
