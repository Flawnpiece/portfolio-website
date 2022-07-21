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
                    <img class="image-box" src='./assets/profile.png' alt="" width={"60%"} />
                    <br />

                    <div class="red-line vertical"></div><br />
                    In my Nokia's office
                </div>
                <div class="flex-item">
                    <h1>Khalil Aouadi</h1>
                    <div class="red-line sub-text"></div>
                    <p>Un ingénieur en génie logiciel intéréssé<br />
                        par le developement fullstack
                    </p>
                </div>
                <div class="flex-item ">

                </div>
            </div>

            <Link to="/about_fr" class="right-arrow"><img class="button-continue" src="./assets/down-arrow.png" alt="" width="45%" /></Link>

            <Link to="/portfolio-website" class="fr">EN</Link>
        </header >
    );
};

export default Home;