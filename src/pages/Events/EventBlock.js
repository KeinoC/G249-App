import React from "react";
import "./EventBlock.css";


export default function EventBlock ({  
    eventDate,
    eventType,
    eventHost, 
    hostPhone,
    hostEmail,
    contract,
    eventNotes,
    eventPrice
}){


return (
    <div className = "event-block">
        <div className = "date-block">Date: {eventDate}</div>
        <li>Price: {eventPrice}</li>
        <div>
            <li>Type: {eventType}</li>
            <li>Host: {eventHost}</li>
            <li>Phone #:{hostPhone}</li>
            <li>Email: {hostEmail}</li>
            <li>Contract: {contract}</li>
            <li>Notes: {eventNotes}</li>
        </div>
    </div>


)}