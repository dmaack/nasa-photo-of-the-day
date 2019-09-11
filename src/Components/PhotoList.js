import React, { useState, useEffect } from 'react';
import PhotoCard from './PhotoCard';
import axios from 'axios';


function PhotoList() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`)
        .then(response => {
            const newPhoto = response.data;
            console.log('NASA photo of the day', newPhoto);
            setPhotos(newPhoto);
        })
        .catch(error => {
            console.log('The data was not returned', error);
        });
    }, []);
    return( 
        <div className='container'>
            {photos.map(photo => {
                return(
                    <PhotoCard key={photos.id} title={photos.title} date={photos.date} img={photos.hdurl} copyright={photos.copyright} explanation={photos.explanation} />
                )
            })}
        </div>
    )
}

export default PhotoList;