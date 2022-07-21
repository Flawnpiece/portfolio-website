import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Home = () => {
    return (
        <div>

            <h1 class="center">Projets</h1>
            <div class="red-line"></div>
            <br /><br /><br />


            <div class="flex-container">
                <div class="flex-item"><br />
                    <h2 class="center">Calculateur d'insuline</h2>
                    <div class="red-line sub-text line-center"></div>


                    <h4>Description</h4>
                    <p>Le Mealtime Insulin Calculator est une application mobile qui aide les diabétiques à calculer leur quantité totale de grammes de glucides et de fibres afin de calculer correctement le dosage d'insuline avec leurs ratios insuline : glucides. L'objectif de l'application est de faciliter le calcul quotidien des glucides et des fibres pour les diabétiques.</p>
                    <br />
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/diKL4q8DIpQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br /><br /><br /><br /><br /><br /><br /><br />
                    <a href="https://makerepo.com/JCMSpencer/826.c11-mealtime-insulin-calculator" class="btn">Visiter sur Makerepo</a>
                </div>
                <div class="flex-item"><br />
                    <h2 class="center">Python Discord bot</h2>
                    <div class="red-line sub-text line-center"></div>


                    <h4>Description</h4>
                    <p>Un bot discord que j'ai créé pour développer mes compétences Python en utilisant la bibliothèque discord.py. Le bot utilise une API publique fournie par un jeu pour présenter des messages et des informations basés sur les commandes des utilisateurs.</p>
                    <br />
                    <img src="https://flawnpiece.github.io/portfolio-website/assets/discordbotimg.png" alt="" />
                    <br /><br /><br />
                    <a href="https://github.com/Flawnpiece/osu-mocha-old" class="btn">Visiter sur Github</a>



                </div>

            </div>
            <Link to="/contact_fr" class="down-arrow-project line-center"><img class="button-continue" src="https://flawnpiece.github.io/portfolio-website/assets/down-arrow.png" alt="" width="20%" /></Link>

        </div>
    );
};

export default Home;