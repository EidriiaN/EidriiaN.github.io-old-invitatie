import React, { useEffect, useState, useCallback } from "react";
import restaurant from "../images/restaurant.jpeg"
import logo from "../images/logo.png"
import church from "../images/church.jpg"

export default function Main() {
    const deadline = "September 3, 2023";
    const [remainingTime, setRemainingTime] = useState(Date.parse(deadline) - Date.now());

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();
        setRemainingTime(time);
    };

    const updateRemainingTime = useCallback(() => {
        getTime();
        requestAnimationFrame(updateRemainingTime);
    }, []);

    useEffect(() => {
        const timer = requestAnimationFrame(updateRemainingTime);

        return () => {
            cancelAnimationFrame(timer);
        };
    }, [updateRemainingTime]);

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
    const seconds = Math.floor((remainingTime / 1000) % 60);

    return (

        <div className="main">
            <nav> 
                <div className="child_name">
                    <img src={logo} alt="logo" />
                    <h3>Otilia Stefania</h3>
                    <p className="date_of_event">3 Septembrie 2023</p>
                </div>
                <div className="nav-links">
                    <a href="#">Acasă</a>
                    <a href="#about">Despre</a>
                    <a href="#event">Eveniment</a>
                    <a href="#where-when">Unde și când</a>
                    <a href="#">Confirmare</a>
                </div>
                <div className="footer-nav">
                    <span className="separator"></span>
                    <p>Otilia Stefania <br /> 3 Septembrie 2023</p>
                </div>
            </nav>
            <section>
                <div className="unicorn">
                    <div className="overlay"></div>
                    <div className="unicorn-text">
                        <h3>Otilia Stefania</h3>
                        <p>3 Septembrie 2023 - Ploiești, România</p>
                    </div>
                </div>
                <div className="about" id="about">
                    <div className="child-message">
                        <div className="child-img"></div>
                        <h2>Otilia Stefania</h2>
                        <p>Dacă ai ajuns aici înseamnă că țin la tine și m-aș bucura enorm dacă ai fi alături de mine într-o zi atât de specială!</p>
                    </div>
                    <div className="parents-godparents">
                        <h2>Dragii mei părinți</h2>
                        <p>Octavian și Silvia</p>
                        <h2>Nașii</h2>
                        <p>Andi și Alina</p>
                    </div>
                </div>
                <div className="countdown">
                    <div className="overlay"></div>
                    <div className="count-items">
                        <h4>Încă puțin până la ziua cea mare:</h4>
                        <div className="count-time">
                            <span>{days}d </span>
                            <span>{hours}h </span>
                            <span>{minutes}m </span>
                            <span>{seconds}s </span>
                        </div>
                    </div>
                </div>
                <div className="event" id="event">
                    <div className="event-img-container">
                        <div className="event-img">

                        </div>
                    </div>
                    <div className="event-text">
                        <h4>Te invit cu drag la</h4>
                        <h3>BOTEZUL MEU.</h3>
                        <p>Mama și tata mi-au pregatit o petrecere de neuitat și mi-ar face o imensă plăcere să putem fi impreună în această zi.</p>
                        <p>Am auzit că vor veni zâne, zmei, prinți și prințese, spiriduși și unicorni. Sau poate e doar în imaginația mea</p>
                        <p>Indiferent, este prima mea petrecere și te aștept cu drag!</p>
                    </div>
                </div>
                <div className="countdown">
                    <div className="overlay"></div>
                    <div className="count-items">
                        <h4>Prima mea petrecere!</h4>
                        <h3>3 SEPTEMBRIE 2023</h3>
                    </div>
                </div>
                <div className="where-when" id="where-when">
                    <h3>Locații</h3>
                    <h2>UNDE ȘI CÂND</h2>
                    <div className="where">
                        <div className="church">
                            <img src={church} alt="biserica" className="church-img" />
                            <div className="church-text">
                                <h5>CEREMONIA RELIGIOASĂ</h5>
                                <p>
                                    <i className="fa-solid fa-location-dot"></i>
                                    Mănăstirea Chițorani
                                    <br />
                                    Comuna Bucov, Chițorani
                                    <br />
                                    Chițorani, România
                                </p>

                                <p>
                                    <i className="fa-solid fa-clock"></i>
                                    Duminică, 3 Septembrie 2023, 14:00
                                </p>

                                <p>
                                    <i className="fa-solid fa-signs-post"></i>
                                    <a href="https://www.google.com/maps/dir//44.9858028,26.1389582/@44.9857814,26.0689184,12z?entry=ttu" target="_blank" rel="noopener noreferrer">Vezi hartă</a>
                                </p>
                            </div>
                        </div>
                        <div className="restaurant">
                            <img src={restaurant} alt="restaurant" className="church-img" />
                            <div className="church-text">
                                <h5>PETRECEREA</h5>
                                <p>
                                    <i className="fa-solid fa-location-dot"></i>
                                    Ballroom Cupola
                                    <br />
                                    Blejoi, DJ102
                                    <br />
                                    Blejoi, România
                                </p>

                                <p>
                                    <i className="fa-solid fa-clock"></i>
                                    Duminică, 22 Ianuarie 2023, 12:00
                                </p>

                                <p>
                                    <i className="fa-solid fa-signs-post"></i>
                                    <a href="https://www.google.com/maps/dir//44.9794247,25.9895353/@44.9794033,25.9194955,12z?entry=ttu" target="_blank" rel="noopener noreferrer">Vezi hartă</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="confirm">
                    <div className="overlay"></div>
                    <div className="confirm-form">
                        <h2>Vei participa?</h2>
                        <p>Te așteptăm cu drag!</p>
                        <p>Trimite un mesaj la numerele de mai jos pentru a ne anunța decizia ta.</p>
                        <p className="border-top">Te rugăm să ne comunici decizia ta până la data de
                            <br />
                            26 August 2023.
                        </p>
                        <div className="contact">
                            <div className="number1">
                                <h2>Octavian</h2>
                                <a href="tel:+0786499645"><i className="fa-solid fa-phone"></i>0786499645</a>
                            </div>
                            <div className="number2">
                                <h2>Silvia</h2>
                                <a href="tel:+0766870956"><i className="fa-solid fa-phone"></i>0766870956</a>
                            </div>
                        </div>
                        <div className="bebe-img"></div>

                    </div>
                </div>
            </section>

        </div>
    )
}