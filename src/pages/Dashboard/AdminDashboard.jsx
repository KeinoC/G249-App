import React, {useContext} from "react"
import Nav from "../Nav/Nav"
import { DataContext } from "../../redux/DataContext"

function AdminDashboard() {

const { user } = useContext(DataContext)

    return (
        <>
        <Nav />
        { user ? <AdminDashboard /> : <></>}
        </>
    )
}

export default AdminDashboard