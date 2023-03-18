import {link} from "react-router-dom"
import React, {useState} from 'react';
import Calend from "./Calendar.jsx"
import Calendar from 'react-calendar'

export default function Inquiry({targetDate, handleTargetDate, date, value, available}) {

    // console.log("date inquiry:", date)
    return (
        {available} ? <h1> {targetDate} available! </h1> : <h1> Unfortunately {targetDate} unavailable.</h1>
    
    )
}
