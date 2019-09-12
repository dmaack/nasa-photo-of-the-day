import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Input, FormGroup, Label} from 'reactstrap';


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
        <div>
        <Card>
          <CardBody>
            <CardTitle>Need to Pick my Card's Title</CardTitle>
            <CardSubtitle>Photo's Subtitle</CardSubtitle>
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
           <img width="100%" src={photo.url} alt="Card image cap" />
          <CardBody>
            <CardText>{photo.title}</CardText>
            <CardText>Image Credit & Copyright: {photo.copyright}</CardText>
            <CardText><strong>Explanation: </strong> {photo.explanation}</CardText>
  
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      </div>
    );
  };




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

export default PhotoCard;



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