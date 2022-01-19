import React from 'react';
import axios from 'axios';

function Modal(props) {
    if (!props.show) 
        return null;

    function editSuperHeroInfo(event, id) {
        event.preventDefault();
        axios.put(`http://localhost:8000/superheroes/${id}`, props.modalInfo).then((res) => {
            const superHeroData = res.data;
            props.setSuperHeroInfo({...props.superHeroInfo, superHeroData});
            // event.preventDefault();
        })
    }
    
    return (
        <div>
            
        </div>
    );
}

export default Modal;