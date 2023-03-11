import React from "react";
import EventBlock from "./EventBlock.js"


function Events({masterEventList}) {

        const eventBlocks = masterEventList.map(event => {
            return (
                <EventBlock 
                    key = {event.id}
                    eventType = {event.eventType}
                    eventHost = {event.eventHost}
                    hostPhone = {event.hostPhone}
                    hostEmail = {event.hostEmail}
                    contract = {event.contract}
                    eventNotes = {event.eventNotes}
                    eventPrice = {event.eventPrice}
                />
            )
        })
    


    return <div className = "event-blocks-container">{eventBlocks}</div>
}

export default Events