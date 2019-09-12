import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Input, FormGroup, Label} from 'reactstrap';
import styled from 'styled-components';


const NasaPODCard = styled.div`
    background: #fcfdfd;
    width: 700px;
    // height:70vmin;
    margin: 5% auto;
    line-height: 1.8;
    color: #37444c;
    padding:4%;
`;

const NasaImage = styled.img`
    width: 500px;
    height: 600px;
    object-fit: scale;
    margin-top:4%
`;
const NasaCardTitle = styled.h1`
    font-size: 1.2rem;
    margin: 1% 0;
`;

const NasaCardSubtitle =styled.div`
    font-size: 1.1rem;
`;



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
        <div className='photo_of_day_card'>
        < NasaPODCard>
          <CardBody>
            <NasaCardTitle><strong>Need to Pick my Card's Title</strong></NasaCardTitle>
            <NasaCardSubtitle>Photo's Subtitle</NasaCardSubtitle>
            <FormGroup>
            <Label for="exampleDate">Select Your Date:</Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
              onChange={e => setDate(e.target.value)}
            />
            </FormGroup>
          </CardBody>
           <NasaImage width="100%" src={photo.url} alt="Card image cap" />
          <CardBody>
            <CardText><strong>{photo.title}</strong></CardText>
            <CardText><strong>Image Credit & Copyright:</strong> {photo.copyright}</CardText>
            <CardText><strong>Explanation: </strong> {photo.explanation}</CardText>
  
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </ NasaPODCard>
      </div>
    );
  };

  export default PhotoCard;


//         <div className='photo_container'>
//             <div className='date_selector'>
//                 <h2>Select the date for new photo:</h2>
//                 <input type='date' onChange={e => setDate(e.target.value)}  />
//             </div>
           
//             <img className='photo_of_day' alt='astronomic scene in outer space' src={photo.url} />

//             <div className='photo_info'>
//                 <h3 className='title'>{photo.title}</h3>
//                 <h3 className='copyright'>Image Credit & Copyright: {photo.copyright}</h3>
//                 <p className='explanation'><strong>Explanation: </strong> {photo.explanation}</p>
//                 <h3>Tomorrow's photo: </h3>
//             </div>
//         </div>
//     );
// };





// const Example = (props) => {
//   return (
//     <div>
//       <Card>
//         <CardBody>
//           <CardTitle>Need to Pick my Card's Title</CardTitle>
//           <CardSubtitle>Photo's Subtitle</CardSubtitle>
//           <FormGroup>
//           <Label for="exampleDate">Select Your Date:</Label>
//           <Input
//             type="date"
//             name="date"
//             id="exampleDate"
//             placeholder="date placeholder"
//             onChange={e => setDate(e.target.value)}
//           />
//           </FormGroup>
//         </CardBody>
//          <img width="100%" src={photo.url} alt="Card image cap" />
//         <CardBody>
//           <CardText>{photo.title}</CardText>
//           <CardText>Image Credit & Copyright: {photo.copyright}</CardText>
//           <CardText><strong>Explanation: </strong> {photo.explanation}</CardText>

//           <CardLink href="#">Card Link</CardLink>
//           <CardLink href="#">Another Link</CardLink>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default Example;