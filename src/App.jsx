import "./App.css";
import Events from "./pages/Events/Events.js";
import AddEventForm from "./pages/Events/AddEventForm.js";
import EventBlock from "./pages/Events/EventBlock.js";

import Home from "./pages/Home/Home.jsx";
import Splash from "./pages/Home/Splash.jsx";
import Availability from "./pages/Availability/Availability.jsx";
import Tour from "./pages/Tour/Tour.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Access from "./pages/Access/Access"
import Nav from "./pages/Nav/Nav"
import Dashboard from "./pages/Dashboard/Dashboard"

// import { Route, Routes, useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import { DataContext, DataProvider } from "./redux/DataContext"

function App() {
    const [masterEventList, setMasterEventList] = useState([]);
    const [bookedEventDates, setBookedEventDates] = useState([]);

    function onAddEvent(newEvent) {
        setMasterEventList([...masterEventList, newEvent]);
    }

    const dataApi =
        "https://api.sheety.co/3132ef9a7c5a88398c1881749e1528c7/testDataForG249Api/events"; /// add endpoint back
    ///// Pulling Data
    useEffect(() => {
        fetch(dataApi)
            .then((res) => res.json())
            .then((data) => setMasterEventList(data.events));
    }, []);

    useEffect(() => {
        const bookedArray = [];
        masterEventList.forEach((event) => {
            const formattedDate = event.eventDate;
            if (bookedArray.indexOf(formattedDate) < 0) {
                bookedArray.push(formattedDate);
            }
        });

        setBookedEventDates(bookedArray);
    }, [masterEventList]);


    return (
        <DataProvider>
        <div className="App">
            <BrowserRouter>
            {/* <Nav /> */}
                <Routes>
                    <Route exact path="/" element={<Splash />} />
                    <Route
                        path="/availability"
                        element={
                            <Availability
                            masterEventList={masterEventList}
                            bookedEventDates={bookedEventDates}
                            setBookedEventDates={setBookedEventDates}
                            />
                        }
                    />
                    <Route path="/home" element={<Home />} />
                    <Route path="/tour" element={<Tour />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Access />} />
                    <Route path="/dashboard" element={<Dashboard />} />

                    <Route
                        path="/events"
                        element={
                            <>
                                <AddEventForm
                                    onAddEvent={onAddEvent}
                                    dataApi={dataApi}
                                />
                                <Events masterEventList={masterEventList} />
                                <EventBlock
                                    masterEventList={masterEventList}
                                    dataApi={dataApi}
                                />
                            </>
                        }
                    ></Route>
                </Routes>
            </BrowserRouter>
        </div>
        </DataProvider>
    );
}

export default App;
