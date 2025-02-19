import React from "react";
import { VoteResults, DateRecord } from "../VoteResults/VoteResults";

// props komponenty Event
export type EventProps = {
    location?: string;
    // id: string;
    title: string;
    date: DateRecord[];
};

export const Event: React.FC<EventProps> = ({ title, location, date }) => {

    return (
        <div className="event-box">
            <h3>{title}-{location}</h3>
            {date.map((item) => (
                <VoteResults key={item.timestamp} records={item.records} timestamp={item.timestamp}></VoteResults>
            ))}

        </div>
    );
};
