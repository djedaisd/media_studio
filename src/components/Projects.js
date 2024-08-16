
import '../index.css';
import podcastImage from '../assets/podcast.png'; // Adjust the path as necessary
;

import React, { useState } from 'react';
import podcastImage1 from '../assets/podcast.png';
import podcastImage2 from '../assets/studio-zone.jpg';
import podcastImage3 from '../assets/studio.jpg';
import './slider.css';



const Projects = () => {
    const slides = [
        {
            image: podcastImage1,
            title: "AITU Podcast ",
            description: "Университетский проект студентов, направленный на медиа развитие университета в сфере подкастинга и YouTube контент-мейкинга",
            link: "https://www.instagram.com/mediastudio.kz?igsh=c2VmNGgwOTIzeWx2"
        },
        {
            image: podcastImage2,
            title: "AITU Podcast ",
            description: "Университетский проект студентов, направленный на медиа развитие университета в сфере подкастинга и YouTube контент-мейкинга",
            link: "https://www.instagram.com/mediastudio.kz?igsh=c2VmNGgwOTIzeWx2"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <section className="project-zone">
            <section className="projects" id='projects'>
            <h2>ПРОЕКТЫ</h2>

            </section>
            <div className="carousel-project">
                <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="carousel-image" />
                <div className="carousel-controls">
                    <button className="prev" onClick={prevSlide}>&#10094;</button>
                    <button className="next" onClick={nextSlide}>&#10095;</button>
                </div>
                <div className="carousel-caption-project">
                    <div className="caption-text">
                        <h3>{slides[currentSlide].title}</h3>
                        <p>{slides[currentSlide].description}</p>
                    </div>
                    <a href={slides[currentSlide].link} className="project-book">Смотреть</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
