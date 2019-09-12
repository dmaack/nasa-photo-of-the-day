import React, { useState, useEffect } from 'react';
import axios from 'axios';


function PhotoCard() {
    const [photo, setPhoto] = useState({});
    const [date, setDate] = useState('2019-09-11');

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
        .then(response => {
            const newPhoto = response.data;
            console.log('NASA photo of the day', newPhoto);
            setPhoto(newPhoto);
        })
        .catch(error => {
            console.log('The data was not returned', error);
        });
    }, [date]);

    return( 
        <div className='photo_container'>
            <div className='date_selector'>
                <h2>Select the date for new photo:</h2>
                <input type='date' onChange={e => setDate(e.target.value)}  />
            </div>
           
            <img className='photo_of_day' alt='astronomic scene in outer space' src={photo.url} />
            
            <div className='photo_info'>
                <h3 className='title'>{photo.title}</h3>
                <h3 className='copyright'>Image Credit & Copyright: {photo.copyright}</h3>
                <p className='explanation'><strong>Explanation: </strong> {photo.explanation}</p>
                <h3>Tomorrow's photo: </h3>
            </div>
        </div>
    );
};

export default PhotoCard;

