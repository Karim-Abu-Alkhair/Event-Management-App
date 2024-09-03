import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EventForm = () => {
  // Initialize state with events from localStorage
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  const initialValues = {
    name: "",
    date: "",
    location: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Event name is required"),
    date: Yup.string().required("Date is required"),
    location: Yup.string().required("Location is required"),
    description: Yup.string().required("Description is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newEvent = {
      id: Date.now(),
      ...values,
    };
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    resetForm();
  };

  // Update localStorage whenever events state changes
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  return (
    <div className="h-full flex items-center flex-col gap-4 justify-center">
      <h2 className="text-bold text-primary text-2xl">Create Event</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-4 w-full md:w-1/2">
            <div>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Event Name"
                className="border border-primary p-2 rounded-md w-full"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-xs text-error"
              />
            </div>
            <div>
              <Field
                type="date"
                id="date"
                name="date"
                placeholder="Date"
                className="border border-primary p-2 rounded-md w-full"
              />
              <ErrorMessage
                name="date"
                component="p"
                className="text-xs text-error"
              />
            </div>
            <div>
              <Field
                type="text"
                id="location"
                name="location"
                placeholder="Location"
                className="border border-primary p-2 rounded-md w-full"
              />
              <ErrorMessage
                name="location"
                component="p"
                className="text-xs text-error"
              />
            </div>
            <div>
              <Field
                as="textarea"
                id="description"
                name="description"
                placeholder="Description"
                className="border border-primary p-2 rounded-md w-full"
              />
              <ErrorMessage
                name="description"
                component="p"
                className="text-xs text-error"
              />
            </div>
            <button
              type="submit"
              className="bg-primary px-4 py-2 text-white font-semibold rounded-md"
            >
              Create Event
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EventForm;
