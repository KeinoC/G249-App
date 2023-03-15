
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


  const dataApi = "https://api.sheety.co/3132ef9a7c5a88398c1881749e1528c7/testDataForG249Api/events"
///// Pulling Data
useEffect(() => {
  fetch(dataApi)
  .then( res => res.json())
  .then( data => setMasterEventList(data.events)) }, [])

  console.log(masterEventList)


// const [state, setState] = useEffect({})

useEffect(() => {
  fetch("http://127.0.0.1:5000/events").then(response => {
    if (response.status == 200) {
      return response.json
  }
})
  .then(data => console.log(data))
  .then(error => console.log(error))
})

  return (
    <div className="App">
      <AddEventForm onAddEvent = {onAddEvent} dataApi = {dataApi} />
      <Events masterEventList = {masterEventList} />
      <EventBlock masterEventList = {masterEventList} dataApi = {dataApi} />
    </div>
  );
}

export default App;
