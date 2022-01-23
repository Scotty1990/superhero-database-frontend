import React from 'react';
import axios from 'axios';

function AddHero(props) {
    if(!props.showAdd)
        return null;
     
    function onClick(event) {
        axios.post(`${process.env.REACT_APP_API_URL}superheroes/`, props.modalInfo).then((res) => {
            const superHeroData = res.data;
            props.setHeroes(heroes => [...heroes, superHeroData])
        })
    }

    function refreshPage() {
        window.location.reload()
        props.onClose()
    }
      
    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h4 className='modal-title'>Add a Super Hero</h4>
                </div>
                <div className='modal-body'>
                    
                </div>
                <div className='modal-footer'>
                    <div className='container'>
                        <form>
                            <div>
                                <label className="name-label">
                                    Name:
                                </label>
                                <input type="text" className="name-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, name: event.target.value})}></input>
                            </div>
                            <div>
                                <label className="creators-label">
                                    Creators:
                                </label>
                                <input type="text" className="creators-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, creators: event.target.value})}></input>
                            </div>
                            <div>
                                <label className="alter-ego-label">
                                    Alter Ego:
                                </label>
                                <input type="text" className="alter-ego-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, alter_ego: event.target.value})}></input>
                            </div>
                            <div>
                                <label className="aliases-label">
                                    Aliases:
                                </label>
                                <input type="text" className="aliases-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, aliases: event.target.value})}></input>
                            </div>
                            <div>
                                <label className="place-of-residence-label">
                                    Place of Residence:
                                </label>
                                <input type="text" className="place-of-residence-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, place_of_residence: event.target.value})}></input>
                            </div>
                            <div>
                                <label className="description-label">
                                    Description:
                                </label>
                                <input type="text" className="description-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, description: event.target.value})}></input>
                            </div>
                            <div>
                                <label className="origin-story-label">
                                    Origin Story:
                                </label>
                                <input type="text" className="origin-story-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, origin_story: event.target.value})}></input>
                            </div>
                            <div>
                                <label className="career-label">
                                    Career:
                                </label>
                                <input type="text" className="career-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, career: event.target.value})}></input>
                            </div>
                            <div>
                                <label className="image-label">
                                    Image URL:
                                </label>
                                <input type="text" className="image-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, image_url: event.target.value})}></input>
                            </div>
                            <div>
                                <label className="powers-label">
                                    Powers / Abilities:
                                </label>
                                <input type="text" className="powers-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, powers: event.target.value})}></input>
                            </div>
                            <div>
                                <label className="available-label">
                                    Comics:
                                </label>
                                <input type="text" className="available-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, comics: event.target.value})}></input>
                            </div>
                            <div>
                                <label className="movies-label">
                                    Movies:
                                </label>
                                <input type="text" className="movies-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, movies: event.target.value})}></input>
                            </div>
                            <div>
                                <label className="other-forms-of-media-label">
                                    Other Forms of Media:
                                </label>
                                <input type="text" className="other-forms-of-media-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, other_forms_of_media: event.target.value})}></input>
                            </div>
                            <button 
                                className='edit-info-button' 
                                type="submit" 
                                onClick={(event) => onClick(event)} 
                            >
                                Add Super Hero
                            </button>
                        </form>
                    </div>
                    <button className='modal-button' onClick={refreshPage}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default AddHero;