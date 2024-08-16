
import '../index.css';
import logo from '../assets/logo.jpg';
import studioImage from '../assets/studio.jpg';
import React, { useEffect, useState } from 'react';

    const Header = () => {
        const [activeSection, setActiveSection] = useState('home');

        useEffect(() => {
          const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let foundSection = 'home'; // Default to the home section

            sections.forEach((section) => {
              const sectionTop = section.getBoundingClientRect().top;
              const sectionHeight = section.offsetHeight;
              if (sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight > window.innerHeight / 2) {
                foundSection = section.getAttribute('id');
              }
            });

            setActiveSection(foundSection);
          };

          window.addEventListener('scroll', handleScroll);

          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);

    return (
        <header className="header" id='header'>
            <nav>
                <img src={logo} alt="Your Logo" className="logo" />

                <header>
      <nav>
      <ul>
          <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Главная</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>О нас</a></li>
          <li><a href="#services" className={activeSection === 'services' ? 'active' : ''}>Услуги</a></li>
          <li><a href="#locations" className={activeSection === 'locations' ? 'active' : ''}>Локации</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Проекты</a></li>
          <li><a href="#contacts" className={activeSection === 'contacts' ? 'active' : ''}>Контакты</a></li>
        </ul>
      </nav>
    </header>
                <div className="header_text">
                    Мы предлагаем высококачественные оборудования, помощь профессионалов и разные локации для вашего удобства! Качественная акустика, кондиционер, чистота студии и приятное освещение сделает ваш опыт в нашей студии самым приятным и продуктивным!
                </div>
                <div className="header_text1">
                    Забронируйте время для съемок прямо сейчас!
                </div>
            </nav>
            <img src={studioImage} alt="Studio" className="background-image" />
            <div className="header-content">
                <div className="media-studio">
                    <span className="media">MEDIA</span>
                    <span className="studio">STUDIO</span>
                </div>
                <div className="reserve">
                    <div className="line"></div>
                    <div className="text"><a href="https://t.me/msaitu">ЗАБРОНИРОВАТЬ</a></div>
                    <div className="line"></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
