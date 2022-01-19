import React, { Link, useState } from 'react';
import axios from 'axios';
function Villains(props) {
    const [villains, setVillains] = useState([])
    
    function getData() {
        axios.get(`http://localhost:8000/supervillains/`).then((res) => {
          const superVillainData = res.data;
          setVillains(superVillainData)
          console.log(superVillainData)
        });
      }
    return (
        <div>
            This is Villains
            <button onClick={getData}>Villains</button>
            {villains.map(villain => {
              return (
                <div>
                  <div>
                    <h1>{villain.name}</h1>
                  </div>
                  <div>
                    <img src={villain.image_url} alt={villain.name} />
                  </div>
                  <div>
                    {villain.creators}
                  </div>
                </div>
              )
            })}
        </div>
    );
}

export default Villains;