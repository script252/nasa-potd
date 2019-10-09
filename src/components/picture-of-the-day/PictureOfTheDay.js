import React, { useState, useEffect } from 'react';
import ImageArticle from './ImageArticle';
import NavControls from './NavControls';
import GetDateString from '../../helpers/dateFormat';

import './PictureOfTheDay.scss';

function PictureOfTheDay({apiUrl, apiKey, date}) {

    const isLatestDay = () => {
        return currentDate.getDate() === new Date().getDate();
    }

    const previousDay = () => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 1);
        setCurrentDate(newDate);
    }

    const nextDay = () => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
        setCurrentDate(newDate);
    }

    const latestDay = () => {
        const newDate = new Date();
        setCurrentDate(newDate);
    }

    const selectDate = (newDate) => {
        setCurrentDate(newDate);
    }

    const [data, setData] = useState({});
    const [currentDate, setCurrentDate] = useState(date);
    
    useEffect(() => {

        async function fetchData() {
            const d = currentDate;
            const yearString = d.getFullYear().toString().padStart(4, '0');
            const monthString = (d.getMonth() + 1).toString().padStart(2, '0');
            const dayString = d.getDate().toString().padStart(2, '0');
            const dateString = `${yearString}-${monthString}-${dayString}`;
            const fetchUrl = `${apiUrl}?api_key=${apiKey}&date=${dateString}`;
            const response = await fetch(fetchUrl);
            const json = await response.json();
            setData(json);
        }

        fetchData();

    }, [apiUrl, apiKey, date, currentDate]);
    
    return (
        <React.Fragment>
            <ImageArticle 
                copyright={data.copyright}
                articleText={data.explanation}
                hdImageUrl={data.hdurl}
                imageUrl={data.url}
                title={data.title}
                subTitle={GetDateString(currentDate)}
            >
            </ImageArticle>
            <NavControls
                forwardCallback={nextDay}
                backCallback={previousDay}
                latestCallback={latestDay}
                selectDateCallback={selectDate}
                forwardVisible={!isLatestDay()}
                date={currentDate}
            ></NavControls>
        </React.Fragment>
    )
}

export default PictureOfTheDay;