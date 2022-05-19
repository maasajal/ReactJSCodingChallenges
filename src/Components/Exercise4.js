import React, { useState } from 'react';

function Exercise4() {
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1>Exercise 4: State and Props</h1>
            <div>
                <p>Button has been clicked: {count} times.</p>
                <button onClick={() => setCount(count + 1)}>Click Me!</button>
            </div>
        </div>
    );
}
export default Exercise4;
