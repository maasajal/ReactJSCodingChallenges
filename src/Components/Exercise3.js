import React from 'react';

function Exercise3() {
    function Button(props) {
        return <button onClick={(e) => handleClick(props.num, e)}>{props.btn}</button>
    }
    const handleClick = (num, e) => {
        alert("You clicked on Button " + num, e);
        console.log('handle clicked button', e)
    }

    return(
        <div>
            <h1>Exercise 3: Custom Component</h1>
            <div>
                <Button btn="Button 1" num={1} />
                <Button btn="Button 2" num={2} />
                <Button btn="Button 3" num={3} />
            </div>
        </div>
    );
}
export default Exercise3;
