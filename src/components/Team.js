import React from 'react';
import '../index.css'; // Импорт вашего CSS файла
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import yergen from '../assets/yerda.jpg';
import nurik from '../assets/nurik.jpg';
import bibo from '../assets/bibosnv.jpg';
import logosev from '../assets/losavage.jpg';



const teamMembers = [
  {
    imgSrc: team1,
    name: 'YRYSBEK ADILBEKULY',
    position: 'ВИДЕОГРАФ',
  },
  {
    imgSrc: team2,
    name: 'SAGAT AKIMBAI',
    position: 'VFX,VR специалист',
  },
  {
    imgSrc: yergen,
    name: 'DAMIR YERDAULET',
    position: 'IT Product Manager',
  },
  ,
  {
    imgSrc: bibo,
    name: 'BIBOSYNOV YERALY',
    position: 'MARKETING SPECIALIST',
  },
  {
    imgSrc: nurik,
    name: 'SEIDASHIM NURZHIGIT',
    position: 'Front-End Developer',
  },
  ,

  {
    imgSrc: logosev,
    name: 'SEIFULLIN ADILKHAN',
    position: 'MARKETING SPECIALIST',
  },
  // Добавьте сюда новые объекты для новых сотрудников
];

function Teams() {
  return (
    <div>
      <div className="service-header"  id="locations">
        <div>
          <h2>КОМАНДА</h2>
        </div>
        <div className="team-book">MEDIA STUDIO</div>
      </div>

      <div className="header_text4">
        Мы предлагаем высококачественные
        оборудования, помощь профессионалов и
        разные локации для вашего удобства!
        Качественная акустика, кондиционер,
        чистота студии и приятное освещение
        сделает ваш опыт в нашей студии самым
        приятным и продуктивным!

        Забронируйте время для съемок
        прямо сейчас!
      </div>

      <div className="header_text5">
        Забронируйте время для съемок
        прямо сейчас!
      </div>

      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <div className="circular_image">
              <img src={member.imgSrc} alt={`Team Member ${index + 1}`} />
            </div>
            <h1>{member.name}</h1>
            <p>{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;
