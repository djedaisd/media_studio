import React from 'react';
import '../index.css'; // Импорт вашего CSS файла
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import yergen from '../assets/yerda.jpg';
function Teams() {
  return (
    <div>
    <div class="service-header">
        <div>
            <h2>КОМАНДА</h2>

        </div>
        <div class="team-book">MEDIA STUDIO</div>

    </div>
    <div>
        <div class="header_text4">
            Мы предлагаем высококачественные
            оборудования, помощь профессионалов и
            разные локации для вашего удобства!
            Качественная акустика, кондиционер,
            чистота студии и  приятное освещение
            сделает ваш опыт в нашей студии самым
            приятным и продуктивным!

            Забронируйте время для съемок
            прямо сейчас!

        </div>
        <div class="header_text5">
            Забронируйте время для съемок
            прямо сейчас!
        </div>

    </div>
    <div className="row-img" id='locations'>
      <div className="withtext">
        <div className="circular_image">
          <img src={team1} alt="Team Member 1" />
        </div>
        <h1>YRYSBEK ADILBEKULY</h1>
        <p>ВИДЕОГРАФ</p>
      </div>

      <div className="withtext">
        <div className="circular_image">
          <img src={team2} alt="Team Member 2" />
        </div>
        <h1>SAGAT AKIMBAI</h1>
        <p>VFX,VR специалист</p>
      </div>

      <div className="withtext">
        <div className="circular_image">
          <img src={yergen} alt="Team Member 3" />
        </div>
        <h1>DAMIR YERDAULET</h1>
        <p>IT Product Manager</p>
      </div>
    </div>
    </div>
  );
}

export default Teams;
