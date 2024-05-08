
import React, { useState } from 'react'
import './Proposal.css'


const Proposal = () => {


    const [isAccepted, setIsAccepted] = useState(false);
    const handleAcceptance = () => {
        const confirmation = window.confirm(" Prashant says: Are you sure?");
        if (confirmation) {
            setIsAccepted(true);

        }
    }
    return (
        <div className='container'>
            <h1>Will you  Hook my <span>Heart</span> ?</h1>
            {isAccepted ? (<p>Yes!!I do! Let's create a beautiful UI together!</p>) : (<button onClick={handleAcceptance}>❤ Yes, I accept!</button>)
            }
        </div>
    );
};

export default Proposal