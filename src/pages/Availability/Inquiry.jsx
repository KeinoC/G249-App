import { link } from "react-router-dom";
import React, { useState } from "react";
import Calend from "./Calendar.jsx";
import Calendar from "react-calendar";
import "./calendar.css";
import "./Availability.css"

export default function Inquiry({
    targetDate,
    handleTargetDate,
    date,
    value,
    available,
    bookedEventDates,
    setAvailability,
}) {
    // console.log("date inquiry:", date)



    return (
        <>
            {available ? (
                <h1>{targetDate} <span className = "available"></span></h1>
            ) : (
                <h1>Unfortunately {targetDate} <span className = "unavailable">unavailable.</span></h1>
            )}
        </>
    );
}
