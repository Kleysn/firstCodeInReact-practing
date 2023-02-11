import React, { useState } from "react";
import Title from "../components/Title";

const EsignatureApp = () => {

    const [name, setName] = useState("");
    const [date, setDate] = useState("Date");

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }

    const inputStyle = {
        border: "none",
        borderBottom: "2px dotted",
        outline: "none",
        padding: "0.35rem 0"
    }

    return (
        <div className="container text-center">

            <Title classes={"subtitle"} text={name} />
            <Title classes={"subtitle"} text={date} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis porro aliquid, exercitationem dolor tempora fuga commodi aspernatur nihil est aliquam sapiente consequuntur nostrum laudantium molestias totam, cum voluptatum iste pariatur!</p>

            <footer className="d-flex" >
                <input onChange={handleDateChange} type="date" style={inputStyle} />
                <input onChange={handleNameChange} type="text" style={inputStyle} />
            </footer>

        </div >

    )
}

export default EsignatureApp;