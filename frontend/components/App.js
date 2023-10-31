import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card'

const api_key = 'DEMO_KEY';
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;


  

function App() {

  const [apod, setApod] = useState();
  useEffect(() => {
       function fetchPhoto() {
         axios.get(URL)
         .then(res => {
             console.log(res.data);
             setApod(res.data);
         })
         .catch(err => {
             console.log(err.message);
         })
       }
       fetchPhoto();

       setApod({
           
            "date": "2023-10-30",
            "explanation": "Do any shapes seem to jump out at you from this interstellar field of stars and dust? The jeweled expanse, filled with faint, starlight-reflecting clouds, drifts through the night in the royal constellation of Cepheus. Far from your own neighborhood on planet Earth, these ghostly apparitions lurk along the plane of the Milky Way at the edge of the Cepheus Flare molecular cloud complex some 1,200 light-years away. Over two light-years across and brighter than the other spooky chimeras, VdB 141 o...",
            "hdurl": "https://apod.nasa.gov/apod/image/2310/GhostNebula_Jarzyna_960.jpg",
            "media_type": "image",
            "service_version": "v1",
            "title": "Reflections of the Ghost Nebula",
            "url": "https://apod.nasa.gov/apod/image/2310/GhostNebula_Jarzyna_960.jpg"
           
       })
  }, []);

    if(!apod) return 'Fetching Photo of the Day...';
  return (
    <section> 
        
      <Card     
      title={apod.title}
      text={apod.explanation}
      imageURL={apod.url}  
      date={apod.date}
         />


    </section>
  )
}

export default App
