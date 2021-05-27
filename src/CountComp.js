import React, { useEffect, useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0);
    let aux = "";
    let color = {backgroundColor:"green"};

    useEffect(() => {
        setInterval(() => setCount(oldCount => oldCount + 1), 1500);
    }, []);

    if(count % 3 === 0){
        aux = "Fizz";
        color.backgroundColor = "red";
    }
    if(count % 5 === 0){
        aux = "Buzz";
        color.backgroundColor = "yellow";
    }
    if(count % 15 === 0){
        aux = "Fizz Buzz";
        color.backgroundColor = "green";
    }

    return (
        <React.Fragment>
            <h3>{ count }</h3>
            <h3 style={color}>{ aux }</h3>
        </React.Fragment>
    )
};

export default Count;