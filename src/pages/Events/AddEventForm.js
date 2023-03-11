import React, {useEffect, useState} from "react";



export default function AddEventForm({onAddEvent}) {

    const [showForm, setShowForm] = useState(false)

    const initialValue = {
        eventDate: "",
        eventType: "",
        eventHost: "",
        hostPhone: "",
        hostEmail: "",
        contract: "",
        eventNotes: "",
        eventPrice: ""
    }



    const [formData, setFormData] = useState(initialValue);

    // console.log(formData)

    function handleInput(e) {
        const field = e.target.name
        const value = e.target.value;
        setFormData({...formData,[field]:value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("submitting")

        const newEvent = {
            eventDate: formData.eventDate,
            eventType: formData.eventType,
            eventHost: formData.eventHost,
            hostPhone: formData.hostPhone,
            hostEmail: formData.hostEmail,
            contract: formData.contract,
            eventNotes: formData.eventNotes,
            eventPrice: formData.eventPrice
        }

        console.log(newEvent)

        fetch("https://g249db.onrender.com/books", {
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(newEvent),
        })
            .then(res => res.json())
            .then((newObj) => onAddEvent(newObj))
        
            setFormData(initialValue)
    }


    function toggleAddEventForm() {
        setShowForm(!showForm);
    }    

    return (
    <div className ="add-event-div">
        <button className = "add-event-btn" onClick={toggleAddEventForm}>toggle form</button>
        <h2>Add New Event</h2>
        <form onSubmit = {handleSubmit}>
        
        <input
                onChange = {handleInput}
                name = "eventDate" 
                type="text" 
                placeholder = "Add Event Date"
                value = {formData.eventDate}
                />

            <input
                onChange = {handleInput}
                name = "eventType" 
                type="text" 
                placeholder = "Add Event Type"
                value = {formData.eventType}
                />

            <input
                onChange = {handleInput}
                name = "eventHost" 
                type="text" 
                placeholder = "Add Host's full name"
                value = {formData.eventHost}
                />
            
            <input
                onChange = {handleInput}
                name = "hostPhone" 
                type="text" 
                placeholder = "Add Host's phone number"
                value = {formData.hostPhone}
                />

            <input
                onChange = {handleInput}
                name = "hostEmail" 
                type="text" 
                placeholder = "Add Host's email address"
                value = {formData.hostEmail}
                />

            <input
                onChange = {handleInput}
                name = "contract" 
                type="text" 
                placeholder = "Attach event contract"
                value = {formData.contract}
                />

            <input
                onChange = {handleInput}
                name = "eventNotes" 
                type="text" 
                placeholder = "Add notes"
                value = {formData.eventNotes}
                />

            <input
                onChange = {handleInput}
                name = "eventPrice" 
                type="text" 
                placeholder = "Add event price"
                value = {formData.eventPrice}
                />
            <input type="submit" />
        </form>
    </div>

    )
}