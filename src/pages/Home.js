import React, { useState } from "react";
import Calendar from "../components/Calendar";
import EventForm from "../components/EventForm";

const Home = () => {
    const [events, setEvents] = useState([
        {
            subject: "Calculus",
            description: "Math Class",
            startSlot: 24,
            endSlot: 48,
        },
        {
            subject: "Physics",
            description: "Lecture",
            startSlot: 40,
            endSlot: 56,
        },
        {
            subject: "Chemistry",
            description: "Lab",
            startSlot: 50,
            endSlot: 70,
        },
    ]);

    const addEvent = (event) => {
        setEvents([...events, event]);
    };

    const deleteEvent = (startSlot) => {
        setEvents(events.filter((event) => event.startSlot !== startSlot));
    };

    return (
        <div className="p-4">
            <EventForm addEvent={addEvent} />
            <Calendar events={events} onDelete={deleteEvent} />
        </div>
    );
};

export default Home;
