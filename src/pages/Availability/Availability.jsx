import React, {useState} from 'react';
import {link} from "react-router-dom"
import Calend from "./Calendar.jsx"
import './calendar.css';
import Inquiry from './Inquiry.jsx'
import Nav from '../Nav/Nav.jsx'




export default function Availability({masterEventList}) {


    const [value, onChange] = useState(new Date());
    const [targetDate, setTargetDate] = useState("")
    const [available, setAvailability] = useState(true)

    function handleTargetDate(value, event) {
        const d = new Date(value)
        const dateText = d.toDateString()
        setTargetDate(dateText)
        dateAvailabilityCheck()
        console.log(typeof(dateText),"-", dateText)
    }

    function dateAvailabilityCheck() {
        const list = masterEventList.forEach(event => {
            // console.log("target date:", targetDate, "event date:", event.eventDate)
            if (event.eventDate === targetDate && event.contract === "Booked") {
                setAvailability(false)
            }})}


    return (
        <div>
            <Calend 

                handleTargetDate={handleTargetDate}
                targetDate = {targetDate}
                setTargetDate = {setTargetDate}
            />
            
            <Inquiry targetDate={targetDate} available={available}/>
            <Nav />
        
        </div>
    )
}
