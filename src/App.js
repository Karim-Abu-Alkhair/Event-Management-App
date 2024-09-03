import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import EventDetails from "./components/EventDetails";
import Layout from "./containers/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<EventList />} />
          <Route path="create-event" element={<EventForm />} />
          <Route path="event/:id" element={<EventDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
