import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';


const About = () => {
    return (
        <div>

            <h1 class="center">Compétence & Expérience</h1>
            <div class="red-line stretch"></div>
            <br /><br /><br />


            <div class="flex-container">
                <div class="flex-item">

                    <h2 class="center">Éducation</h2>
                    <div class="red-line sub-text2 line-center"></div>
                    <br />

                    <h4>Diplômes</h4>
                    <p>J'ai obtenu mon diplôme d'études secondaires à la Polyvalente de l'Érablière et j'entreprends actuellement mon diplôme universitaire en génie logiciel. J'aurai fini fin 2024.</p>
                    <br />

                    <h4>Certificat</h4>
                    <p>J'ai obtenu le certificat de base d'Azure montrant que je connaissais les outils et les services fournis par Azure et que je connaissais le fonctionnement d'un environnement cloud.</p>

                </div>
                <div class="flex-item">
                    <h2 class="center">Compétences</h2>
                    <div class="red-line sub-text2 line-center"></div>
                    <br />
                    <h4>Codage</h4>
                    <p>Maîtrise des langages de programmation Python et Java avec de l'expérience personnelle et professionnelle. J'ai également utilisé HTML/CSS/Javascript pour divers projets de sites web ainsi que SQL pour la gestion de bases de données. J'ai aussi quelques connaissances en Powershell.</p>
                    <br />

                    <h4>UI/UX</h4>
                    <p>Réalisation de diverses maquettes et prototypes à l'aide d'Adobe XD et Figma pour des projets scolaires et personnels. J'ai également appris en autodidacte des outils tels qu'Adobe Photoshop, Adobe After Effects ainsi que Sony Vegas Pro 15 afin de pouvoir faire des projets personnels.</p>


                </div>
                <div class="flex-item">
                    <h2 class="center">Expérience</h2>
                    <div class="red-line sub-text2 line-center"></div>
                    <br />
                    <h4>Gouvernement du Canada</h4>
                    <p>Créez une solution d'audit pour surveiller les journaux dans l'environnement cloud Azure. Établi une norme de balisage pour les outils et les ressources dans l'environnement Azure. Également utilisé des scripts Powershell pour automatiser la configuration de la ressource de paramètres de diagnostic dans Azure.</p>
                    <br />

                    <h4>Nokia - Wavesuite</h4>
                    <p>Testé plusieurs composants d'un logiciel de gestion de réseau grâce à une procédure de test bien établie et structuré. J'ai commencé par accomplir des tests manuels sur l'interface web du logiciel et j'ai finalement fini par écrire des tests en utilisant le language de programmation python pour les tests de régression.</p>

                </div>
            </div>

            <Link to="/projects_fr" class="down-arrow line-center"><img class="button-continue" src="./assets/down-arrow.png" alt="" width="20%" /></Link>

        </div>
    );
};

export default About;