import React, { useState } from 'react';
import Jokes from "./Jokes.json";

function Exercise8() {

    return(
        <div>
            <h1>Exercise 8: Rendering JSON</h1>
            <div className="flex-container">

                {Jokes.map((jokeDetail) => {
                    return <div className="post">
                        <h1>{jokeDetail.setup}</h1>
                        <p>{jokeDetail.punchline}</p>
                    </div>
                })}
            </div>
        </div>
    );
}
export default Exercise8;
