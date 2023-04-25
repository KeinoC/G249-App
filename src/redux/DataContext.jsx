import React, { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom"

const DataContext = createContext();

const DataProvider = ({ children }) => {


    // const navigate = useNavigate()
////////////////// User Data //////////////////////////////////////////

const [user, setUser] = useState({});

// const [userData, setUserData] = useState({
//     firstName : user ? user.firstName : ""
// });




///////////////////////////////////////////////////////////////////////////


return (
    <DataContext.Provider
        value={{
            user,
            setUser
        }}
    >
        {children}
    </DataContext.Provider>
);
};

export { DataContext, DataProvider };