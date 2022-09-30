import React from "react";

export default function BaseErrors(props) {
    const { name, errors } = props;

    return (
        errors && errors[`${name}`] && <p role="alert" className="text - red - 700">{errors[`${name}`].message}</p>
    )

}
