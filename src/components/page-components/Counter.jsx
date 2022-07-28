import React, { useEffect, useState } from "react";
export default function Counter() {
    console.log("Counter fucntion called");

    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);


    useEffect(() => {
        console.log("use effect called");
        // increment()
    }, [counter, counter2])

    const increment = () => {
        console.log("increment called");
        setCounter(counter + 1)
    }

    const increment2 = () => {
        console.log("increment called");
        setCounter2(counter2 + 1)
    }
    return (
        <div>
            <p onClick={increment}>Counter: {counter}</p>
            <p onClick={increment2}>Counter 2: {counter2}</p>
        </div>

    )


}

