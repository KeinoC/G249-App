import logo from './logo.svg';
import './App.css';
import Events from "./pages/Events/Events.js"
import AddEventForm from "./pages/Events/AddEventForm.js"
import EventBlock from "./pages/Events/EventBlock.js"

// import { Router } from 'express';
// import { Router } from '@angular/router';
// import { Route, Routes, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function App() {

  const [masterEventList, setMasterEventList] = useState([])

  function onAddEvent(newEvent) {
    setMasterEventList ([...masterEventList, newEvent]);
  }

///// Pulling Data
useEffect(() => {
  fetch("https://g249db.onrender.com/books")
  .then( res => res.json())
  .then( data => setMasterEventList(data)) }, [])


  




  return (
    <div className="App">
      <AddEventForm onAddEvent = {onAddEvent} />
      <Events masterEventList = {masterEventList} />
      <EventBlock masterEventList = {masterEventList}/>
    </div>
  );
}

export default App;
