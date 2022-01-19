import React, { useState } from 'react';
import axios from 'axios';
import Modal from './Modal';

function Heroes(props) {
    const [heroes, setHeroes] = useState([])
    const [modalInfo, setModalInfo] = useState("")
    const [show, setShow] = useState(false)

    const superPersonInfo = {
      // aliases: 'none listed',
      // alter_ego: 'Barry Allen',
      // career: 'none listed',
      // comics: 'none listed',
      // creators: 'no creators listed',
      // description: 'none listed',
      image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjspaUfQA9lrBMCWrGSQDiLnGT9hvvFyTMIA&usqp=CAU'
      // movies: 'none listed',
      // name: 'The Flash',
      // origin_story: 'none listed',
      // other_forms_of_media: 'none listed',
      // place_of_residence: 'none listed',
      // powers: 'none listed'
    }

    function getData() {
        axios.get("https://rocky-waters-42590.herokuapp.com/superheroes/").then((res) => {
          const superHeroData = res.data;
          setHeroes(superHeroData)
          console.log(superHeroData)
        })
      }

      function postHero(event) {
        // event.preventDefault();
        axios.post("https://rocky-waters-42590.herokuapp.com/superheroes/", modalInfo).then((res) => {
          const superHeroData = res.data;
          console.log("it's getting here")
          setHeroes(heroes => [...heroes, superHeroData]);
          console.log(heroes)
          // event.preventDefault();
        })
      }

    //   function editHeroInfo(event, id) {
    //     axios.put(`https://rocky-waters-42590.herokuapp.com/superheroes/1`, superPersonInfo).then((res) => {
    //       const superHeroData = res.data;
    //       console.log("it's getting here")
    //       setHeroes(heroes => [...heroes, superHeroData]);
    //       console.log(heroes)
    //     })
    // }

    function handleShowItem(data) {
      setModalInfo(data);
    }

    function onClick(item) {
      setShow(true);
      handleShowItem(item);
    }

    return (
        <div>
            This is Heroes
            {/* <button onClick={editHeroInfo}>edit Flash</button> */}
            <button onClick={getData}>Heroes</button>
            {heroes.map(hero => {
              return (
                <div onClick={() => onClick(hero)} key={hero.id}>
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
            <Modal
              onClose={() => setShow(false)} 
              show={show}
              modalInfo={modalInfo}
              setModalInfo={setModalInfo}
              heroes={heroes}
              setHeroes={setHeroes}
            />
        </div>
    );
}

export default Heroes;