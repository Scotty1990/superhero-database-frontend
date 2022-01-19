import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal from './Modal';
import AddHero from './AddHero'

function Heroes(props) {
    const [heroes, setHeroes] = useState([])
    const [modalInfo, setModalInfo] = useState("")
    const [show, setShow] = useState(false)
    const [showAdd, setShowAdd] = useState(false)
    const [searchString, setSearchString] = useState("")
    const [tempArr, setTempArr] = useState([])
    
    useEffect(() => {
      getData();
    }, [searchString])

    function goThroughWords(words, str) {
      let splitWords = words.split(" ");
      let splitString = str.split(" ");
      console.log(splitWords)
      for (let i = 0; i < splitWords.length; i++) {
        for (let j = 0; j < splitString.length; j++) {
          if (
            splitWords[i].startsWith(searchString) ||
            splitWords[i] === splitString[j]
            )
            return true;
        }
      }
    }

    function getData() {
        axios.get("https://rocky-waters-42590.herokuapp.com/superheroes/").then((res) => {
          const superHeroData = res.data;
          setSearchString(searchString.toLowerCase());
          const tempHeroes = superHeroData.filter(hero => {
            if (hero.name.toLowerCase().includes(searchString) && goThroughWords(hero.name.toLowerCase(), searchString))
              return true;
            else
              return false;
          })
          setHeroes(tempHeroes)
          console.log(tempHeroes)
        })
      }

    function handleShowItem(data) {
      setModalInfo(data);
    }

    function onClick(item) {
      setShow(true);
      handleShowItem(item);
    }

    function handleChange(event) {
      setSearchString(event.target.value)
    }

    return (
        <div>
            <AddHero
              onClose={() => setShowAdd(false)}
              showAdd={showAdd}
              modalInfo={modalInfo}
              setModalInfo={setModalInfo}
              heroes={heroes}
              setHeroes={setHeroes}
            />
            <button onClick={() => setShowAdd(true)}>Add Hero</button>
            <input 
              type="text" 
              onChange={handleChange}
              placeholder='search'
            ></input>
            {heroes.map(hero => {
              return (
                <div key={hero.id}>
                  <Link to={`superheroes/${hero.id}`}>
                    <div>
                      <div>
                        <h1>{hero.name}</h1>
                      </div>
                      <div>
                        <img src={hero.image_url} alt={hero.name} />
                      </div>
                    </div>
                  </Link>
                  <div>
                    <button onClick={() => onClick(hero)}>Edit Hero Info</button>
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