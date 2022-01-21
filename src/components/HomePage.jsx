import React from 'react';
import { Link } from 'react-router-dom';
import EvilSuperman from './pics/EvilSuperman.png'
import TheAvengers from './pics/TheAvengers.png'

function HomePage(props) {
    return (
        <div>
            <h2>Welcome to the Super Hero Database!</h2>
            <h2>Choose good or evil!</h2>
            <div>
                <h1>Heroes</h1>
                <Link to='/heroes'>
                    <img src={TheAvengers} alt='avengers' />
                </Link>
            </div>
            <div>
                <h1>Villains</h1>
                <Link to='/villains'>
                    <img src={EvilSuperman} alt='Evil Superman' />
                </Link>
            </div>
        </div>
    );
}

export default HomePage;