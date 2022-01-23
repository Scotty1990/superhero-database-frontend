import React from 'react';
import axios from 'axios';

function Modal(props) {
    if (!props.show) 
        return null;

    function editSuperHeroInfo(event, id) {
        axios.put(`${process.env.REACT_APP_API_URL}superheroes/${id}`, props.modalInfo).then((res) => {
            const superHeroData = res.data;
            props.setHeroes({...props.superHeroInfo, superHeroData});
        })
    }

    function deleteHero(event, id) {
        axios.delete(`${process.env.REACT_APP_API_URL}superheroes/${id}`).then((res) => {   
            const superHeroData = res.data;
            props.setHeroes(superHeroData);
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
                </div>
                <div className='modal-footer'>
                    <div className='container'>
                        <form>
                            <div>
                                <label className="edit-name-label">Edit Name:</label>
                                <input type="text" className="edit-name-input" onChange={(event) => props.setModalInfo({...props.modalInfo, name: event.target.value})}></input>
                            </div>
                            <div>
                                <label className="edit-creator-label">Edit Creators:</label>
                                <input placeholder={props.modalInfo.creators} type="text" className="edit-creator-input" onChange={(event) => props.setModalInfo({...props.modalInfo, creators: event.target.value})}></input>
                            </div>
                            <div>
                                <label className="edit-image-URL-label">Edit Image URL:</label>
                                <input placeholder={props.modalInfo.image_url} type="text" className="edit-image-URL-input" onChange={(event) => props.setModalInfo({...props.modalInfo, image_url: event.target.value})}></input>
                            </div>
                            <div>
                                <label className="edit-alter-ego-label">Edit Alter Ego:</label>
                                <input placeholder={props.modalInfo.alter_ego} type="text" className="edit-alter-ego-input" onChange={(event) => props.setModalInfo({...props.modalInfo, alter_ego: event.target.value})}></input>
                            </div>
                            <div>
                                <label className="edit-place-of-residence-label">Edit Place of Residence:</label>
                                <input placeholder={props.modalInfo.place_of_residence} type="text" className="edit-place-of-residence-input" onChange={(event) => props.setModalInfo({...props.modalInfo, place_of_residence: event.target.value})}></input>
                            </div>
                            <div>
                                <label className="edit-origin-story-label">Edit Origin Story:</label>
                                <textarea rows="5" columns="1" placeholder={props.modalInfo.origin_story} className="edit-origin-story-input" onChange={(event) => props.setModalInfo({...props.modalInfo, origin_story: event.target.value})}></textarea>
                            </div>
                            <div>
                                <label className="edit-description-label">Edit Description:</label>
                                <textarea rows="5" columns="1" className="edit-description-input" onChange={(event) => props.setModalInfo({...props.modalInfo, description: event.target.value})}></textarea>
                            </div>
                            <div>
                                <label className="edit-career-label">Edit Career:</label>
                                <input type="text" className="edit-career-input" onChange={(event) => props.setModalInfo({...props.modalInfo, career: event.target.value})}></input>
                            </div>
                            <div>
                                <label className="edit-aliases-label">Edit Aliases:</label>
                                <input placeholder={props.modalInfo.image} type="text" className="edit-aliases-input" onChange={(event) => props.setModalInfo({...props.modalInfo, aliases: event.target.value})}></input>
                            </div>
                            <div>
                                <label className="edit-powers-label">Edit Powers / Abilities</label>
                                <input type="text" className="edit-powers-input" onChange={(event) => props.setModalInfo({...props.modalInfo, powers: event.target.value})}></input>
                            </div>
                            <div>
                                <label className="edit-comics-label">Edit Comics</label>
                                <input type="text" className="edit-comics-input" onChange={(event) => props.setModalInfo({...props.modalInfo, comics: event.target.value})}></input>
                            </div>
                            <div>
                                <label className="edit-movies-label">Edit Movies</label>
                                <input type="text" className="edit-movies-input" onChange={(event) => props.setModalInfo({...props.modalInfo, movies: event.target.value})}></input>
                            </div>
                            <div>
                                <label className="edit-other-forms-of-media-label">Edit Other Forms of Media</label>
                                <input type="text" className="edit-other-forms-of-media-input" onChange={(event) => props.setModalInfo({...props.modalInfo, other_forms_of_media: event.target.value})}></input>
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
                                className='delete-button'
                            >
                                Delete Hero
                            </button>
                        </form>
                    </div>
                    <button className='modal-button' onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    
    );
}

export default Modal;