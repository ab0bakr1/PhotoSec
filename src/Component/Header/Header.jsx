import React from "react";
import "./Header.css"
import Navbar from "./Navbar/Navbar";

function header() {
    return (
        <header className="px-5 ">
            <div className="d-flex gap-5 align-items-center">
                <Navbar />
                <div className="logo ms-5">
                    <h1>photo<span>sec</span></h1>
                </div>
            </div>
            <div className="call">
                <button type="button">call us now</button>
            </div>
        </header>
    )
}
export default header;