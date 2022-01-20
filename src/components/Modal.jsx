import React from 'react';
import axios from 'axios';

function Modal(props) {
    if (!props.show) 
        return null;

    function editSuperHeroInfo(event, id) {
        axios.put(`${process.env.REACT_APP_API_URL}superheroes/${id}`, props.modalInfo).then((res) => {
            event.preventDefault();
            const superHeroData = res.data;
            props.setHeroes({...props.superHeroInfo, superHeroData});
            event.preventDefault();
        })
    }

    function deleteHero(event, id) {
        axios.delete(`${process.env.REACT_APP_API_URL}superheroes/${id}`).then((res) => {
            event.preventDefault();    
            const superHeroData = res.data;
            props.setHeroes(superHeroData);
            event.preventDefault();
        })
    }
    
    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h4 className='modal-title'>{props.modalInfo.title}</h4>
                </div>
                <div className='modal-body'>
                    {props.modalInfo.description}
                    <div className='location-div'>
                        Location: {props.modalInfo.location}
                    </div>
                </div>
                <div className='modal-footer'>
                    <form>
                        <div>
                            <label id="edit-name-label">Edit Name:</label>
                            <input type="text" id="edit-name-input" onChange={(event) => props.setModalInfo({...props.modalInfo, name: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="edit-creator-label">Edit Creators:</label>
                            <input placeholder={props.modalInfo.creators} type="text" id="edit-creator-input" onChange={(event) => props.setModalInfo({...props.modalInfo, creators: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="edit-image-URL-label">Edit Image URL:</label>
                            <input placeholder={props.modalInfo.image_url} type="text" id="edit-image-URL-input" onChange={(event) => props.setModalInfo({...props.modalInfo, image_url: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="edit-alter-ego-label">Edit Alter Ego:</label>
                            <input placeholder={props.modalInfo.alter_ego} type="text" id="edit-alter-ego-input" onChange={(event) => props.setModalInfo({...props.modalInfo, alter_ego: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="edit-place-of-residence-label">Edit Place of Residence:</label>
                            <input placeholder={props.modalInfo.place_of_residence} type="text" id="edit-place-of-residence-input" onChange={(event) => props.setModalInfo({...props.modalInfo, place_of_residence: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="edit-origin-story-label">Edit Origin Story:</label>
                            <textarea rows="5" columns="1" placeholder={props.modalInfo.origin_story} id="edit-origin-story-input" onChange={(event) => props.setModalInfo({...props.modalInfo, origin_story: event.target.value})}></textarea>
                        </div>
                        <div>
                            <label id="edit-description-label">Edit Description:</label>
                            <textarea rows="5" columns="1" id="edit-description-input" onChange={(event) => props.setModalInfo({...props.modalInfo, description: event.target.value})}></textarea>
                        </div>
                        <div>
                            <label id="edit-career-label">Edit Career:</label>
                            <input type="text" id="edit-career-input" onChange={(event) => props.setModalInfo({...props.modalInfo, career: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="edit-aliases-label">Edit Aliases:</label>
                            <input placeholder={props.modalInfo.image} type="text" id="edit-aliases-input" onChange={(event) => props.setModalInfo({...props.modalInfo, aliases: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="edit-powers-label">Edit Powers</label>
                            <input type="text" onChange={(event) => props.setModalInfo({...props.modalInfo, powers: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="edit-comics-label">Edit Comics</label>
                            <input type="text" onChange={(event) => props.setModalInfo({...props.modalInfo, comics: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="edit-movies-label">Edit Movies</label>
                            <input type="text" onChange={(event) => props.setModalInfo({...props.modalInfo, movies: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="edit-other-forms-of-media-label">Edit Other Forms of Media</label>
                            <input type="text" id="edit-other-forms-of-media-input" onChange={(event) => props.setModalInfo({...props.modalInfo, other_forms_of_media: event.target.value})}></input>
                        </div>
                        <button 
                            className='edit-info-button' 
                            type="submit" 
                            onClick={(event) => editSuperHeroInfo(event, props.modalInfo.id)} 
                        >
                            Edit
                        </button>
                        <button 
                            onClick={(event) => deleteHero(event, props.modalInfo.id)}
                        >
                            Delete Hero
                        </button>
                    </form>
                    <button className='modal-button' onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    
    );
}

export default Modal;