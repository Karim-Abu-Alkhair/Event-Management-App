import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul className="flex  gap-4">
        <Link to="/create-event" className="link">
          Create Event
        </Link>

        <Link to="/" className="link">
          Event List
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
