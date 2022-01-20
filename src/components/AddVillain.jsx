import React from 'react';
import axios from 'axios';

function AddVillain(props) {
    if(!props.showAdd)
    return null;
    
function onClick(event) {
    axios.post(`${process.env.REACT_APP_API_URL}supervillains/`, props.modalInfo).then((res) => {
        event.preventDefault();
        const superVillainData = res.data;
        console.log("it's getting here")
        props.setVillains(villains => [...villains, superVillainData]);
        console.log(props.villains)
    })
  }
    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h4 className='modal-title'>Add a Super Villain</h4>
                </div>
                <div className='modal-body'>
                    Description
                </div>
                <div className='modal-footer'>
                    <form  >
                        <div>
                            <label id="name-label">
                                Name:
                            </label>
                            <input type="text" id="name-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, name: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="creators-label">
                                Creators:
                            </label>
                            <input type="text" id="creators-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, creators: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="alter-ego-label">
                                Alter Ego:
                            </label>
                            <input type="text" id="alter-ego-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, alter_ego: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="aliases-label">
                                Aliases:
                            </label>
                            <input type="text" id="aliases-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, aliases: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="place-of-residence-label">
                                Place of Residence:
                            </label>
                            <input type="text" id="place-of-residence-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, place_of_residence: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="description-label">
                                Description:
                            </label>
                            <input type="text" id="description-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, description: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="origin-story-label">
                                Origin Story:
                            </label>
                            <input type="text" id="origin-story-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, origin_story: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="career-label">
                                Career:
                            </label>
                            <input type="text" id="career-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, career: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="image-label">
                                Image URL:
                            </label>
                            <input type="text" id="image-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, image_url: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="powers-label">
                                Powers:
                            </label>
                            <input type="text" id="powers-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, powers: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="comics-label">
                                Comics:
                            </label>
                            <input type="text" id="comics-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, comics: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="movies-label">
                                Movies:
                            </label>
                            <input type="text" id="movies-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, movies: event.target.value})}></input>
                        </div>
                        <div>
                            <label id="other-forms-of-media-label">
                                Other Forms of Media:
                            </label>
                            <input type="text" id="other-forms-of-media-text-box" onChange={(event) => props.setModalInfo({...props.modalInfo, other_forms_of_media: event.target.value})}></input>
                        </div>
                        <button 
                            className='edit-info-button' 
                            type="submit" 
                            onClick={(event) => onClick(event)} 
                        >
                            Add Super Villain
                        </button>
                    </form>
                    <button className='modal-button' onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default AddVillain;