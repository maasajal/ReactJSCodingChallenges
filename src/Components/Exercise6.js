import React, { useState } from 'react';

function Exercise6() {

    const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

    function AnimalList(props) {
        return <div className="animals">{props.icon + " " + props.name}</div>
    }
    return(
        <div>
            <h1>Exercise 6: Mapping Through A List And Rendering (With A Custom Component)</h1>
            <div>
                <h2>Animal list</h2>
                <div className="animal">
                    {animals.map((name) => <AnimalList icon={"icon"} name={name} />)}
                </div>

            </div>
        </div>
    );
}
export default Exercise6;
