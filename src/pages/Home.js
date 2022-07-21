import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <header>
            <div class="red-line stretch top"></div>
            <br /><br /><br /><br /><br /><br /><br /><br />

            <div class="flex-container">
                <div class="flex-item">
                    <img class="image-box" src='https://flawnpiece.github.io/portfolio-website/assets/profile.png' alt="" width={"60%"} />
                    <br />

                    <div class="red-line vertical"></div><br />
                    In my Nokia's office
                </div>
                <div class="flex-item">
                    <h1>Khalil Aouadi</h1>
                    <div class="red-line sub-text"></div>
                    <p>A software engineer that is interested in <br />
                        fullstack development
                    </p>
                </div>
                <div class="flex-item ">

                </div>
            </div>

            <Link to="/about" class="right-arrow"><img class="button-continue" src="https://flawnpiece.github.io/portfolio-website/assets/down-arrow.png" alt="" width="45%" /></Link>

            <Link to="/home_fr" class="fr">FR</Link>
        </header >
    );
};

export default Home;