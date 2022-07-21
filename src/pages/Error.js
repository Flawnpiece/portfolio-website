import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>

            <h1 class="center">Page not Found | Page non trouver</h1>
            <div class="red-line stretch"></div>
            <br /><br /><br /><br /><br /><br />


            <div class="flex-container">
                <div class="flex-item">

                    <h2 class="center">Get back to the gome page in english</h2>
                    <div class="red-line sub-text line-center"></div>
                    <br />
                    <Link to="/portfolio-website" class="btn line-center">Home</Link>


                </div>

                <div class="flex-item">
                    <h2 class="center">Retournez a la page d'acceuil en français</h2>
                    <div class="red-line sub-text line-center"></div>
                    <br />
                    <Link to="/home_fr" class="btn">Acceuil</Link>
                    <br /><br /><br />
                </div>
            </div>

        </div>
    );
};

export default Home;