import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Home = () => {
    return (
        <div>

            <h1 class="center">Projects</h1>
            <div class="red-line"></div>
            <br /><br /><br />


            <div class="flex-container">
                <div class="flex-item"><br />
                    <h2 class="center">Insulin Calculator</h2>
                    <div class="red-line sub-text line-center"></div>


                    <h4>Description</h4>
                    <p>The Mealtime Insulin Calculator is a mobile application that helps diabetics calculate their total amount of grams of carbohydrates and fibers in order to properly calculate insulin dosage with their insulin: carbohydrate ratios. The objective of the application is to make it easier to calculate carbohydrates and fibers daily for diabetics.</p>
                    <br />
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/diKL4q8DIpQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br /><br /><br /><br /><br /><br /><br /><br />
                    <a href="https://makerepo.com/JCMSpencer/826.c11-mealtime-insulin-calculator" class="btn">Check on Makerepo</a>
                </div>
                <div class="flex-item"><br />
                    <h2 class="center">Python Discord bot</h2>
                    <div class="red-line sub-text line-center"></div>


                    <h4>Description</h4>
                    <p>A discord bot I made to develop my Python skills using the discord.py library. The bot uses an public API given from a game to showcase messages and information based on users commands.</p>
                    <br />
                    <img src="./assets/discordbotimg.png" alt="" />
                    <br /><br /><br />
                    <a href="https://github.com/Flawnpiece/osu-mocha-old" class="btn">Check on Github</a>



                </div>

            </div>
            <Link to="/contact" class="down-arrow-project line-center"><img class="button-continue" src="./assets/down-arrow.png" alt="" width="20%" /></Link>

        </div>
    );
};

export default Home;