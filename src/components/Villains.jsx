import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddVillain from './AddVillain';
import VillainModal from './VillainModal';
import { Link } from 'react-router-dom'

function Villains(props) {
    const [villains, setVillains] = useState([])
    const [modalInfo, setModalInfo] = useState("")
    const [show, setShow] = useState(false)
    const [showAdd, setShowAdd] = useState(false)
    const [searchString, setSearchString] = useState("")
    
    useEffect(() => {
      getData();
    }, [searchString])

    function goThroughWords(words, str) {
      let splitWords = words.split(" ");
      let splitString = str.split(" ");
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

    function sortArray(a, b) {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    }
    
    function getData() {
        axios.get(`https://rocky-waters-42590.herokuapp.com/supervillains/`).then((res) => {
          let newData = res.data
          // In order to sort an object, you have to make a function and pass it into the sort method
          var s = newData.sort(sortArray)
          setSearchString(searchString.toLowerCase());
          const tempVillains = s.filter(villain => {
            if (villain.name.toLowerCase().includes(searchString) && goThroughWords(villain.name.toLowerCase(), searchString))
              return true;
            else
              return false;
          })
          setVillains(tempVillains)
        });
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
          <AddVillain
              onClose={() => setShowAdd(false)}
              showAdd={showAdd}
              modalInfo={modalInfo}
              setModalInfo={setModalInfo}
              villains={villains}
              setVillains={setVillains}
            />
            <button onClick={() => setShowAdd(true)}>Add Villain</button>
            <input 
              type="text" 
              onChange={handleChange}
              placeholder='search'
            ></input>
            {villains.map(villain => {
              return (
                  <div key={villain.id}>
                    <Link to={`supervillains/${villain.id}`}>
                      <div>
                        <div>
                          <h1>{villain.name}</h1>
                        </div>
                        <div>
                          <img src={villain.image_url} alt={villain.name} />
                        </div>
                      </div>
                    </Link>
                    <div>
                      <button onClick={() => onClick(villain)}>Edit Villain Info</button>
                    </div>
                  </div>
                
              )
            })}
            <VillainModal
              onClose={() => setShow(false)} 
              show={show}
              modalInfo={modalInfo}
              setModalInfo={setModalInfo}
              villains={villains}
              setVillains={setVillains}
            />
        </div>
    );
}

export default Villains;