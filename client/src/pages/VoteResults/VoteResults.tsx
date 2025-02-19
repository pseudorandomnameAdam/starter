import React from "react";
import "./styles.css";

export type UserRecord = {
    name: string;
    answer: "yes" | "no" | "if-needed";
};

export type DateRecord = {
    timestamp: number;
    records: UserRecord[];
};

export const VoteResults: React.FC<DateRecord> = ({ timestamp, records }) => {

    return (
        <div className="vote-result">
            <h4>{new Date(timestamp).toLocaleString()}</h4>
            {records.map((item) => (
                <div key={`${Math.random()}`}>{item.name} ({item.answer})</div>
            ))}
        </div>
    );
};
