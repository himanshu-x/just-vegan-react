import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { UserContext } from "../App";
import { BASE_API_URL } from "../helpers/constants";

export default function LogOut() {
    const { state, dispatch } = useContext(UserContext);

    useEffect(() => {
        fetch(`${BASE_API_URL}/auth/logout`)
            .then(res => res.json())
            .then((response) => {
                dispatch({ type: "USER", payload: false })
                return response.payload
            })
            .catch((err) => {
                console.log(err);
            })

    })

    return (
        <h2>Log-out</h2>
    )
} 