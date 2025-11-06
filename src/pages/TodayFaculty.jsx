// src/pages/TodayFaculty.jsx
import React, { useState, useEffect } from "react";
import "../styles/TodayFaculty.css";

export default function TodayFaculty() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const [weekMenu, setWeekMenu] = useState({});
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [meal, setMeal] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    const savedMenu = JSON.parse(localStorage.getItem("weekMenu")) || {};
    setWeekMenu(savedMenu);
  }, []);

  const handleAddMenu = () => {
    if (!meal || !name) return alert("Please fill all fields!");
    const updatedMenu = {
      ...weekMenu,
      [selectedDay]: [...(weekMenu[selectedDay] || []), { meal, name, img }],
    };
    setWeekMenu(updatedMenu);
    localStorage.setItem("weekMenu", JSON.stringify(updatedMenu));
    setMeal("");
    setName("");
    setImg("");
  };

  return (
    <div className="faculty-container">
      <h2>🍳 Edit Weekly Mess Menu</h2>

      <div className="faculty-controls">
        <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
          {days.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Meal (Breakfast/Lunch/Dinner)"
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
        />
        <input
          type="text"
          placeholder="Dish Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <button onClick={handleAddMenu}>Add Menu</button>
      </div>

      <div className="week-display">
        {days.map((day) => (
          <div key={day} className="day-card">
            <h3>{day}</h3>
            {(weekMenu[day] || []).length > 0 ? (
              weekMenu[day].map((item, i) => (
                <div key={i} className="menu-item">
                  {item.img && <img src={item.img} alt={item.name} />}
                  <p>
                    <b>{item.meal}</b>: {item.name}
                  </p>
                </div>
              ))
            ) : (
              <p className="empty-text">No menu added yet</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
