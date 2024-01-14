import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import one from '../../assets/images/1.png'
import two from '../../assets/images/2.png'
import three from '../../assets/images/3.png'
import four from '../../assets/images/4.png'
import five from '../../assets/images/5.png'
import six from '../../assets/images/6.png'
import seven from '../../assets/images/7.png'
import eight from '../../assets/images/8.png'


const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'));
        setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    }

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.image}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
                <div className="Project List">
                    <ul>
                        <li><a href="https://github.com/akshat04/Movies"><h4>Movie Portal</h4></a>
                        <p>This is a dynamic web application where users can explore and watch movie trailers, as well as write and read reviews after watching the movies. 
                            This project integrates multiple API functionalities to provide a comprehensive and engaging movie browsing experience.</p>
                        
                        </li>
                            
                        <li><a href="https://github.com/akshat04/Amazon-Clone"><h4>Amazon Clone</h4></a>
                        <p> An exciting journey into recreating the dynamic and interactive experience of the Amazon website. Crafted with meticulous attention to detail using JavaScript, HTML, and CSS, 
                            this project demonstrates not just my coding skills but also my understanding of e-commerce web design.</p>
                        </li>
                            
                        <li><h4>Blog website</h4>
                        <p> Created a Blog website</p>
                        </li>
                    </ul>
                </div>
                <div id="carousel" class="carousel">
                    <div class="carousel-images">
                        <img src={one} alt="First Image"></img>
                        <img src={two} alt="First Image"></img>
                        <img src={three} alt="First Image"></img>
                        <img src={four} alt="First Image"></img>
                        <img src={five} alt="First Image"></img>
                        <img src={six} alt="First Image"></img>
                        <img src={seven} alt="First Image"></img>
                        <img src={eight} alt="First Image"></img>
            
                    </div>
                    <button class="prev" onclick="moveSlide(-1)">❮</button>
                    <button class="next" onclick="moveSlide(1)">❯</button> 
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;