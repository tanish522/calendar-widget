import React from "react";
import { convertSlotToTime, groupEventsByColumns } from "../utils/helpers";
import EventCard from "./EventCard";

const Calendar = ({ events, onDelete }) => {
    const groupedEvents = groupEventsByColumns(events);

    return (
        <div className="calendar-container">
            <div className="time-column">
                {[...Array(96)].map((_, i) => (
                    <div key={i} className="time-slot">
                        {i % 4 === 0 ? convertSlotToTime(i) : ""}
                    </div>
                ))}
            </div>

            <div className="events-container">
                {groupedEvents.map((column, colIndex) => (
                    <div
                        key={colIndex}
                        className="absolute"
                        style={{ left: `${colIndex * 160}px`, width: "160px" }}
                    >
                        {column.map((event) => (
                            <EventCard
                                key={event.startSlot}
                                event={event}
                                onDelete={onDelete}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
