import React, { useState, useEffect } from "react";
import { link } from "react-router-dom";
import Calend from "./Calendar.jsx";
import "./calendar.css";
import "./Availability.css"
import "../Home/Home.css"
import "../Nav/Nav.css"
import Inquiry from "./Inquiry.jsx";
import Nav from "../Nav/Nav.jsx";

export default function Availability({
    masterEventList,
    bookedEventDates,
    handleBookedDates,
    setBookedEventDates,
}) {
    const [value, onChange] = useState(new Date());
    const [targetDate, setTargetDate] = useState("");
    const [available, setAvailability] = useState(true);


     
        



    function helpFormatDate(date) {
        return new Date(date).toLocaleDateString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }

    function handleTargetDate(value, event) {
        const d = helpFormatDate(value);
        setTargetDate(d);
    }

    useEffect(() => {
        if (targetDate) {
            let matches = 0;

            masterEventList.forEach((event) => {
                if (targetDate === helpFormatDate(event.eventDate)) {
                    matches += 1;
                }
            });

            setAvailability(matches === 0);
        }
    }, [targetDate]);

    return (
        <div className = "availability-container">
            
            <Nav />
            <Calend
                handleTargetDate={handleTargetDate}
                targetDate={targetDate}
                setTargetDate={setTargetDate}
                bookedEventDates = {bookedEventDates}

            />

            <Inquiry
                targetDate={targetDate}
                available={available}
                setAvailability={setAvailability}
                bookedEventDates={bookedEventDates}
            />
        </div>
    );
}
