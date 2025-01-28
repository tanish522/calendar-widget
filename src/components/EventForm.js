import React, { useState } from "react";

const EventForm = ({ addEvent }) => {
    const [formData, setFormData] = useState({
        subject: "",
        description: "",
        startSlot: 0,
        endSlot: 4,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addEvent(formData);
        setFormData({ subject: "", description: "", startSlot: 0, endSlot: 4 });
    };

    return (
        <form onSubmit={handleSubmit} className="event-form">
            <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                }
                className="input-field"
                required
            />
            <input
                type="text"
                placeholder="Description"
                value={formData.description}
                onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                }
                className="input-field"
            />
            <input
                type="number"
                min="0"
                max="95"
                placeholder="Start Slot"
                value={formData.startSlot}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        startSlot: Number(e.target.value),
                    })
                }
                className="input-field"
                required
            />
            <input
                type="number"
                min="1"
                max="96"
                placeholder="End Slot"
                value={formData.endSlot}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        endSlot: Number(e.target.value),
                    })
                }
                className="input-field"
                required
            />
            <button type="submit" className="submit-btn">
                Add Event
            </button>
        </form>
    );
};

export default EventForm;
