import React, {useState} from 'react';
import {link} from "react-router-dom"
import Calendar from 'react-calendar'
import Inquiry from './Inquiry.jsx'
import './calendar.css';
import './Availability.css'
// import BigCalendar from "react-big-calendar";


export default function Calend({handleTargetDate, bookedEventDates}) {

    const [date, onChange] = useState(new Date());

    const disabledDates = bookedEventDates;

    

        const isDateDisabled = date => disabledDates.some(disabledDate => new Date(disabledDate).toDateString() === date.toDateString());
    
    return (
        <div>
            <Calendar 
            onChange={onChange} 
            value={date}
            onClickDay = {handleTargetDate}
            tileDisabled={({ date, view }) => isDateDisabled(date)}
            
            />

        </div>
    )
}