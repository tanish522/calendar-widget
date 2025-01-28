import dayjs from "dayjs";

export const convertSlotToTime = (slot) => {
    const hours = Math.floor(slot / 4);
    const minutes = (slot % 4) * 15;
    return dayjs().hour(hours).minute(minutes).format("HH:mm");
};

export const groupEventsByColumns = (events) => {
    events.sort((a, b) => a.startSlot - b.startSlot);

    let columns = [];
    events.forEach((event) => {
        let placed = false;
        for (let col of columns) {
            if (col[col.length - 1].endSlot <= event.startSlot) {
                col.push(event);
                placed = true;
                break;
            }
        }
        if (!placed) {
            columns.push([event]);
        }
    });

    return columns;
};
