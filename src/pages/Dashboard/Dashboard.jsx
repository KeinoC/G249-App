import React from "react"
import AdminDashboard from "./AdminDashboard"
import Nav from "../Nav/Nav"
import { useContext } from "react"
import { DataContext } from "../../redux/DataContext"

function Dashboard() {

const { user } = useContext(DataContext)

    return (
        <>
        <Nav />
        { user ? <AdminDashboard /> : <></>}
        </>
    )
}

export default Dashboard

