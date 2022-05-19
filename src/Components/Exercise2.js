import React from 'react';

function Exercise2() {
    const handleClick = () => {
        alert("Clicked!");
    }
    return(
        <div>
            <h1>Exercise 2: Capturing User Clicks</h1>
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
    );
}
export default Exercise2;
