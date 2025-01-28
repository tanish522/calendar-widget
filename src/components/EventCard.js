import React from "react";
import { convertSlotToTime } from "../utils/helpers";

const EventCard = ({ event, onDelete }) => {
    const topPosition = event.startSlot * 15;
    const eventHeight = (event.endSlot - event.startSlot) * 15;

    return (
        <div
            className="event-card"
            style={{
                top: `${topPosition}px`,
                height: `${eventHeight}px`,
            }}
        >
            <div
                className="event-header relative"
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                {event.subject}
                <button
                    className="absolute top-0 right-1 text-white text-xs cursor-pointer"
                    onClick={() => onDelete(event.startSlot)}
                >
                    X
                </button>
            </div>
            <div className="event-body">
                <p>
                    <b>Time:</b> {convertSlotToTime(event.startSlot)} -{" "}
                    {convertSlotToTime(event.endSlot)}
                </p>
                <p>
                    <b>Desc:</b> {event.description}
                </p>
            </div>
        </div>
    );
};

export default EventCard;
