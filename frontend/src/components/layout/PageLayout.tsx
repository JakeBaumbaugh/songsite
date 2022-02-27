import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./layout.css";

export default function PageLayout() {
    return <React.Fragment>
        <header>
        <Link to="/">Home</Link>
            <Link to="user/jbdude2010">My Songs</Link>
        </header>
        <Outlet/>
        <footer>
            Footer in progress
        </footer>
    </React.Fragment>
}