import React, { useState } from 'react';

function Exercise7() {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Hello ${FirstName} ${LastName}!`);
    }
    return(
        <div>
            <h1>Exercise 7: Building A Form</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label className="label">
                        <input type="text" value={FirstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name" />
                    </label>
                    <label className="label">
                        <input type="text" value={LastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last name" />
                    </label>
                    <input className="btn" type="submit" value="GREET ME" />
                </form>
            </div>
        </div>
    );
}
export default Exercise7;
