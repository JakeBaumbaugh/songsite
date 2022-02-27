import React from "react";
import { Outlet } from "react-router-dom";
import "./layout.css";

export default function PageLayout() {
    return <React.Fragment>
        <header></header>
        <Outlet/>
        <footer>
            Footer in progress
        </footer>
    </React.Fragment>
}