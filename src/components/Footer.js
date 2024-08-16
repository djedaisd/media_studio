import React from 'react';
import '../index.css';

const Footer = () => {
    return (
        <footer>
            <section className="footer-row">
                <div>Превратите свои идеи в реальность вместе с <span className="highlight">Media Studio</span></div>
                <ul>
          <li><a href="#home" >Главная</a></li>
          <li><a href="#about" >О нас</a></li>
          <li><a href="#services" >Услуги</a></li>
          <li><a href="#locations" >Локации</a></li>
          <li><a href="#projects" >Проекты</a></li>
          <li><a href="#contacts" >Контакты</a></li>
        </ul>
            </section>
            <div className="under-row">
                <div className="idea">
                    Мысль - Идея - Съемка - Результат
                </div>
                <div className="law">
                    Все права защищены
                </div>
                <div className="icons">
                    <a href="https://www.instagram.com/mediastudio.kz?igsh=c2VmNGgwOTIzeWx2"><i className="fi fi-brands-instagram"></i></a>
                    <a href="https://t.me/msaitu"><i className="fi fi-brands-telegram"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
