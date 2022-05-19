import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Exercise9() {
    const url = 'https://random-data-api.com/api/users/random_user?size=10';

    // const [jokes, setJokes] = useState(null);
    // useEffect(() => {
    //     axios.get(url)
    //     .then(response => {
    //         setJokes(response.data);
    //     });
    // }, [url])

    return(
        <div>
            <h1>Exercise 9: Working with an API</h1>
            <div className="flex-container">

            </div>
        </div>
    );
}
export default Exercise9;