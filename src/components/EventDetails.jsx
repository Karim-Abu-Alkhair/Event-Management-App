import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      const parsedEvents = JSON.parse(storedEvents);
      setEvent(parsedEvents[id]);
    }
  }, [id]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Event Details</h2>
      {event ? (
        <div className="bg-layout-bg shadow-md w-fit p-4 flex flex-col gap-4">
          <p>Name: {event.name}</p>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
          <p>Description: {event.description}</p>
        </div>
      ) : (
        <p>Event not found.</p>
      )}
    </div>
  );
};

export default EventDetails;
