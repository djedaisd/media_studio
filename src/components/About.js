
import podcastImage from '../assets/podcast.png';
import podcastImage2 from '../assets/podcast.png';
import podcastImage1 from '../assets/studio-zone.jpg';
import React, { useEffect, useRef, useState  } from 'react';
import '../index.css';
import './slid.css'
import CountUp from 'react-countup';


const About = () => {
    const slides = [
        {
            image: podcastImage1,
            title: "Подкаст зона",

            link: "https://www.instagram.com/mediastudio.kz?igsh=c2VmNGgwOTIzeWx2"
        },
        {
            image: podcastImage2,
            title: "Подкаст зона",

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


    const statsRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect(); // Отключаем наблюдателя, чтобы анимация запускалась только один раз
        }
      },
      { threshold: 0.3 } // Порог срабатывания — 30% видимости компонента
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);
    return (
        <div>
        <section className="about" >
            <div>
                <h2>О НАС</h2>
                <div className="header_text2">
                    Мы предлагаем высококачественные оборудования, помощь профессионалов и разные локации для вашего удобства! Качественная акустика, кондиционер, чистота студии и приятное освещение сделает ваш опыт в нашей студии самым приятным и продуктивным!
                </div>
                <div className="header_text3">
                    Забронируйте время для съемок прямо сейчас!
                </div>
            </div>
            <div className="stats" ref={statsRef}>
      <div className="stat">
        <p className="number">
          {inView && <CountUp start={0} end={1} prefix="№" duration={3} />}
        </p>
        <p className="stat_text">СТУДИЯ В КАЗАХСТАНЕ</p>
      </div>
      <div className="line1"></div>
      <div className="stat">
        <p className="number">
          {inView && <CountUp start={0} end={400} prefix="+" duration={3} />}
        </p>
        <p className="stat_text">ОБСЛУЖЕННЫХ КЛИЕНТОВ</p>
      </div>
      <div className="line1"></div>
      <div className="stat">
        <p className="number">
          {inView && <CountUp start={0} end={27} duration={3} />}
        </p>
        <p className="stat_text">ПРОЕКТОВ</p>
      </div>
    </div>

        </section>
        <section  id='locations'>
        <div className="care-carousel-container">
      <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="care-carousel-image" />
      <div className="care-carousel-navigation">
        <button className="care-carousel-prev" onClick={prevSlide}>&#10094;</button>
        <button className="care-carousel-next" onClick={nextSlide}>&#10095;</button>
      </div>
      <div className="care-carousel-caption">
        <h3>{slides[currentSlide].title}</h3>
        <a href={slides[currentSlide].link} className="care-carousel-button">Забронировать</a>
      </div>
    </div>
        </section>
        </div>
    );
};

export default About;
