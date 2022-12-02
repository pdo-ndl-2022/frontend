import { useEffect, useState } from "react";

export const Timer = () => {
    const [counter, setCounter] = useState(30);

    useEffect(() => {
        setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    return <h2>{counter}</h2>
}