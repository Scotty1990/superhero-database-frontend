import React, { useState } from 'react';
import axios from 'axios';

function Heroes(props) {
    const [heroes, setHeroes] = useState([])
    const superPersonInfo = {
      aliases: 'none listed',
      alter_ego: 'none listed',
      career: 'none listed',
      comics: 'none listed',
      creators: 'no creators listed',
      description: 'none listed',
      image_url: 'none listed',
      movies: 'none listed',
      name: 'The Flash',
      origin_story: 'none listed',
      other_forms_of_media: 'none listed',
      place_of_residence: 'none listed',
      powers: 'none listed'
    }
    const [modalInfo, setModalInfo] = useState(superPersonInfo)
    function getData() {
        axios.get("http://localhost:8000/superheroes/").then((res) => {
          const superHeroData = res.data;
          setHeroes(superHeroData)
          console.log(superHeroData)
        })
      }

      function postHero(event) {
        // event.preventDefault();
        axios.post("http://localhost:8000/superheroes/", modalInfo).then((res) => {
          const superHeroData = res.data;
          console.log("it's getting here")
          setHeroes(heroes => [...heroes, superHeroData]);
          console.log(heroes)
          // event.preventDefault();
        })
      }

    return (
        <div>
            This is Heroes
            <button onClick={postHero}>Add Hero</button>
            <button onClick={getData}>Heroes</button>
            {heroes.map(hero => {
              return (
                <div>
                  <div>
                    <h1>{hero.name}</h1>
                  </div>
                  <div>
                    <img src={hero.image_url} alt={hero.name} />
                  </div>
                  <div>
                    {hero.creators}
                  </div>
                </div>
              )
            })}
        </div>
    );
}

export default Heroes;