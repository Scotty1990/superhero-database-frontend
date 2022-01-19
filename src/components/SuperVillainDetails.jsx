import React, { useState, useEffect } from 'react';

function SuperVillainDetails(props) {
    const [villain, setVillain] = useState([])
    useEffect(() => {
        fetch(`https://rocky-waters-42590.herokuapp.com/supervillains/${props.match.params.id}`)
        .then(res => res.json())
        .then(json => {
            setVillain(json);
        })
        .catch(console.error);
    }, [props.match.params.id]);
    if (!villain) return (<div>Loading</div>)
    return (
        <div>
            <a href="/villains">Back</a>
            <div>
                <h4>Name</h4>
                {villain.name}
            </div>
            <div>
                <h4>Alter Ego</h4>
                {villain.alter_ego}
            </div>
            <div>
                <img src={villain.image_url} alt={villain.name} />
            </div>
            <div>
                <h4>Creators</h4>
                {villain.creators}
            </div>
            <div>
                <h4>Place of Residence</h4>
                {villain.place_of_residence}
            </div>
            <div>
                <h4>Description</h4>
                {villain.description}
            </div>
            <div>
                <h4>Origin Story</h4>
                {villain.origin_story}
            </div>
            <div>
                <h4>Career</h4>
                {villain.career}
            </div>
            <div>
                <h4>Aliases</h4>
                {villain.aliases}
            </div>
            <div>
                <h4>Powers / Abilities</h4>
                {villain.powers}
            </div>
            <div>
                <h4>Comics</h4>
                {villain.comics}
            </div>
            <div>
                <h4>Movies</h4>
                {villain.movies}
            </div>
            <div>
                <h4>Other Forms of Media</h4>
                {villain.other_forms_of_media}
            </div>
        </div>
    );
}

export default SuperVillainDetails;