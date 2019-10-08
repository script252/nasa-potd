const shortMonthNames = ['Jan', 'Feb', 'Mar', 
                    'Apr', 'May', 'Jun', 
                    'Jul', 'Aug', 'Sep', 
                    'Oct', 'Nov', 'Dec'];

function GetDateString(dateObject) {
    const monthString = shortMonthNames[dateObject.getMonth()];
    const day = dateObject.getDate().toString();
    const year = dateObject.getFullYear().toString();
    return `${monthString} ${day}, ${year}`;
}

export default GetDateString;