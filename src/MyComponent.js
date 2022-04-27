import React from 'react';

const Hello = ({ name, flag }) => {
    return (
        <div>
            {flag && <b>****</b>}
            hihihihihihi {name}
        </div>
    )
}

export default Hello;