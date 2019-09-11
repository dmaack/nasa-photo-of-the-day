import React, { useState, useEffect } from 'react';
// import PhotoCard from './PhotoCard';
import axios from 'axios';


function PhotoList() {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response => {
            const newPhoto = response.data;
            console.log('NASA photo of the day', newPhoto);
            setPhoto(newPhoto);
        })
        .catch(error => {
            console.log('The data was not returned', error);
        });
    }, []);

    return( 
        <div className='photo_container'>
            <img className='photo_of_day' alt='astronomic scene in outer space' src={photo.url} />
            <p className='title'>{photo.title}</p>
            <p className='copyright'>Image Credit & Copyright: {photo.copyright}</p>
            <p className='explanation'>Explanation: {photo.explanation}</p>
        </div>
    );
};

export default PhotoList;

