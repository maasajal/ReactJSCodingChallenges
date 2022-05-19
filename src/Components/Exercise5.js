import React, { useState } from 'react';

function Exercise5() {

    const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

    function AnimalList(props) {
        return <li>{props.name}</li>
    }
    return(
        <div>
            <h1>Exercise 5: Mapping Through A List And Rendering</h1>
            <div>
                <h2>Animal list</h2>
                <ul className="animal">
                    {animals.map((name) => <AnimalList name={name} />)}
                </ul>

            </div>
        </div>
    );
}
export default Exercise5;
