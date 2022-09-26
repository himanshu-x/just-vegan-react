import React, { Fragment } from "react"
import { Outlet } from 'react-router-dom';
import Navbar from "../components/utility-components/Navbar"
export default function JustVeganRoot() {
    console.log('Just vegan root render called')
    return (
        <Fragment>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </Fragment>
    )
}