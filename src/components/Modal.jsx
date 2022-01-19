import React from 'react';
import axios from 'axios';

function Modal(props) {
    if (!props.show) 
        return null;

    function editSuperHeroInfo(event, id) {
        // event.preventDefault();
        axios.put(`https://rocky-waters-42590.herokuapp.com/superheroes/${id}`, props.modalInfo).then((res) => {
            const superHeroData = res.data;
            props.setHeroes({...props.superHeroInfo, superHeroData});
            event.preventDefault();
        })
    }

    function deleteHero(event, id) {
        axios.delete(`https://rocky-waters-42590.herokuapp.com/superheroes/${id}`).then((res) => {
            const bookData = res.data;
            props.setHeroes(bookData);
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
                        {/* <div>
                            <label id="edit-genre-label">Edit Genre:</label>
                            <input placeholder={props.modalInfo.genre} type="text" id="edit-genre-input" onChange={(event) => props.setModalInfo({...props.modalInfo, genre: event.target.value})}></input>
                        </div> */}
                        {/* <div>
                            <label id="edit-published-label">Edit Year Published:</label>
                            <input placeholder={props.modalInfo.published} type="text" id="edit-published-input" onChange={(event) => props.setModalInfo({...props.modalInfo, published: event.target.value})}></input>
                        </div> */}
                        {/* <div>
                            <label id="edit-isbn-label">Edit ISBN:</label>
                            <input placeholder={props.modalInfo.isbn} type="text" id="edit-isbn-input" onChange={(event) => props.setModalInfo({...props.modalInfo, isbn: event.target.value})}></input>
                        </div> */}
                        {/* <div>
                            <label id="edit-format-label">Edit Format:</label>
                            <input placeholder={props.modalInfo.format} type="text" id="edit-format-input" onChange={(event) => props.setModalInfo({...props.modalInfo, format: event.target.value})}></input>
                        </div> */}
                        {/* <div>
                            <label id="edit-description-label">Edit Description:</label>
                            <textarea rows="5" columns="1" id="edit-description-input" onChange={(event) => props.setModalInfo({...props.modalInfo, description: event.target.value})}></textarea>
                        </div>
                        <div>
                            <label id="edit-location-label">Edit Location:</label>
                            <input type="text" id="edit-location-input" onChange={(event) => props.setModalInfo({...props.modalInfo, location: event.target.value})}></input>
                        </div> */}
                        {/* <div>
                            <label id="edit-image-label">Edit Image URL:</label>
                            <input placeholder={props.modalInfo.image} type="text" id="edit-image-input" onChange={(event) => props.setModalInfo({...props.modalInfo, image: event.target.value})}></input>
                        </div>
                        <div>
                            <input type="checkbox" onChange={(event) => props.setModalInfo({...props.modalInfo, available: !event.target.checked})} checked={!props.modalInfo.available}></input>
                            <label>
                                Checked Out
                            </label>
                        </div> */}
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