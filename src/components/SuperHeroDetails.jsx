import React, { useEffect, useState } from 'react';

function SuperHeroDetails(props) {
    const [hero, setHero] = useState([])
    useEffect(() => {
        fetch(`https://rocky-waters-42590.herokuapp.com/superheroes/${props.match.params.id}`)
        .then(res => res.json())
        .then(json => {
            setHero(json);
        })
        .catch(console.error);
    }, [props.match.params.id]);
    if (!hero) return (<div>Loading</div>)
    return (
        <div>
            <a href="/heroes">Back</a>
            <div>
                <h4>Name</h4>
                {hero.name}
            </div>
            <div>
                <h4>Alter Ego</h4>
                {hero.alter_ego}
            </div>
            <div>
                <img src={hero.image_url} alt={hero.name} />
            </div>
            <div>
                <h4>Creators</h4>
                {hero.creators}
            </div>
            <div>
                <h4>Place of Residence</h4>
                {hero.place_of_residence}
            </div>
            <div>
                <h4>Description</h4>
                {hero.description}
            </div>
            <div>
                <h4>Origin Story</h4>
                {hero.origin_story}
            </div>
            <div>
                <h4>Career</h4>
                {hero.career}
            </div>
            <div>
                <h4>Aliases</h4>
                {hero.aliases}
            </div>
            <div>
                <h4>Powers / Abilities</h4>
                {hero.powers}
            </div>
            <div>
                <h4>Comics</h4>
                {hero.comics}
            </div>
            <div>
                <h4>Movies</h4>
                {hero.movies}
            </div>
            <div>
                <h4>Other Forms of Media</h4>
                {hero.other_forms_of_media}
            </div>
        </div>
    );
}

export default SuperHeroDetails;