import React from 'react';
import './NavControls.scss';

function NavControls({forwardCallback, backCallback, latestCallback, forwardVisible=false}) {
    return (
        <React.Fragment>
            <button type="button" className="button.back" onClick={backCallback}>Previous</button>
            {forwardVisible ? (<button type="button" className="button.forward" onClick={forwardCallback}>Next</button>) : null}
            <button type="button" className="button.latest" onClick={latestCallback}>Latest</button>
        </React.Fragment>
    )
}

export default NavControls;