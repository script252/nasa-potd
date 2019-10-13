import React, {useState} from 'react';
import Calendar from 'react-calendar';
import './NavControls.scss';

function NavControls({forwardCallback, backCallback, latestCallback, selectDateCallback, forwardVisible=false, date}) {
    
    const visibleStyle = {display: 'block'};
    const hiddenStyle = {display: 'none'};
    
    const calendarProps = {
        defaultValue: date,
        value: date,
        minDate: new Date(1995, 5, 16),
        maxDate: new Date(),
        onChange: selectDateCallback
    };

    const toggleCalendar = () => {
        setCalendarVisible(!calendarVisible);
    };

    const [calendarVisible, setCalendarVisible] = useState(false);

    return (
        <div class="nav-controls">
            <button type="button" className="button-back" onClick={backCallback}>Previous</button>
            <div style={forwardVisible ? visibleStyle : hiddenStyle}>
                <button type="button" className="button-forward" onClick={forwardCallback}>Next</button>
            </div>
            <button type="button" className="button-latest" onClick={latestCallback}>Latest</button>
            <button type="button" className="button-calendar" onClick={toggleCalendar}>[]</button>
            <div style={calendarVisible ? visibleStyle : hiddenStyle}>
                <Calendar {...calendarProps}/>
            </div>
        </div>
    )
}

export default NavControls;