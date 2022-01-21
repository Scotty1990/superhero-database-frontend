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
    let newString = ""
    
    if (heroes == null)
      getData()
      
    useEffect(() => {
      getData();
    }, [searchString])

    function goThroughWords(words, str) {
      let splitWords = words.split(" ");
      let splitString = str.split(" ");
      for (let i = 0; i < splitWords.length; i++) {
        for (let j = 0; j < splitString.length; j++) {
          // console.log(splitWords[i])
          // console.log(splitString[j])
          if (
            splitWords[i].startsWith(searchString.toLowerCase()) ||
            splitWords[i] === splitString[j]
            )
            return true;
        }
      }
    }

    function sortArray(a, b) {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    }

    function getData(event) {
        axios.get(`${process.env.REACT_APP_API_URL}superheroes/`).then((res) => {
          let newData = res.data
          // In order to sort an object, you have to make a function and pass it into the sort method
          var s = newData.sort(sortArray)
          newString = searchString.toLowerCase()
          const tempHeroes = s.filter(hero => {
            if (hero.name.toLowerCase().includes(newString) && goThroughWords(hero.name.toLowerCase(), newString))
              return true;
            else
              return false;
          })
          setHeroes(tempHeroes)
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
            <button className='add-button' onClick={() => setShowAdd(true)}>Add Hero</button>
            <input 
              type="text" 
              onChange={handleChange}
              placeholder='search'
            ></input>
            {heroes.map(hero => {
              return (
                <div className='super-map' key={hero.id}>
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