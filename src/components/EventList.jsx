import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EventList = () => {
  const [events, setEvents] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Events</h2>
      <ul className="flex gap-2">
        {events.map((event, index) => (
          <li
            key={index}
            className="bg-primary text-white font-semibold px-4 py-3 rounded-md text-center"
          >
            <p>{event.name}</p>
            <button
              className="bg-white text-primary rounded-md px-2 py-1 mt-2 text-sm"
              onClick={() => navigate(`/event/${index}`)}
            >
              Open Event Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
