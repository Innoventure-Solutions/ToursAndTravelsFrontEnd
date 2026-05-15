import "./card.css";
import photo1 from "../assets/photo1.jpeg";
import photo2 from "../assets/photo2.jpeg";
import photo3 from "../assets/photo3.jpeg";
import photo4 from "../assets/photo4.jpeg";
import photo5 from "../assets/photo5.jpeg";
import photo6 from "../assets/photo6.jpeg";

import Ho_Chi_Minh_City from "../assets/SOUTH VIETNAM/Ho Chi Minh City/Ho_Chi_Minh_City.jpg";
import Can_Tho from "../assets/SOUTH VIETNAM/Can Tho/Can_Tho.jpg";
import Can_Dao from "../assets/SOUTH VIETNAM/Con Dao/Con_Dao.jpg";
import Phu_Quoc from "../assets/SOUTH VIETNAM/Phu Quoc/Phu_Quoc.jpg";
import Vung_Tau from "../assets/SOUTH VIETNAM/Vung Tau/Vung_Tau.jpg";
import Cao_Bang from "../assets/NORTH VIETNAM/Cao Bang/Cao_Bang.jpg";
import Ha_Giang from "../assets/NORTH VIETNAM/Ha Giang/Ha_Giang.jpg";
import Halong_Bay from "../assets/NORTH VIETNAM/Halong Bay/Halong_Bay.jpg";
import Hanoi from "../assets/NORTH VIETNAM/Hanoi/Hanoi.jpg";
import Ninh_Binh from "../assets/NORTH VIETNAM/Ninh Binh/Ninh_Binh.jpg";
import Sapa from "../assets/NORTH VIETNAM/Sapa/Sapa.jpg";

const Card = () => {
  return (
    <div className="text-center mt-8">
      <h2 className="text-3xl font-bold">Discover</h2>
      <p className="text-xl mt-4">Featured Destinations</p>
      <div className="card-page">
        <div className="card-grid">
          <div className="card-card">
            <div className="card-image">
              <img src={Ho_Chi_Minh_City} alt="Ho Chi Minh City" className="img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">South Vietname - Ho Chi Minh City</h3>
              <p className="card-description">Ho Chi Minh City, Vietnam's largest metropolis formerly known as Saigon, blends French colonial architecture with modern skyscrapers and bustling markets.
                 It serves as the country's economic powerhouse,
                  home to over 14 million people who thrive amid vibrant street food scenes and historic sites like the Notre-Dame Cathedral and Independence Palace.
                  The city's dynamic energy, from chaotic traffic to lively nightlife, captures Vietnam's rapid modernization and cultural richness</p>
              <button className="card-btn">Read More...</button>
            </div>
          </div>

          <div className="card-card">
            <div className="card-image">
              <img src={Can_Tho} alt="Can Tho" className="img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">South Vietname - Can Tho</h3>
              <p className="card-description">Can Tho, a major city in the Mekong Delta region of Vietnam, is known for its lush landscapes, floating markets, and vibrant cultural scene.
                 It serves as a gateway to the delta's natural beauty and traditional way of life.
                  The city's proximity to the river makes it an ideal destination for boat tours and eco-tourism activities.</p>
              <button className="card-btn">Read More...</button>
            </div>
          </div>


          <div className="card-card">
            <div className="card-image">
              <img src={Can_Dao} alt="Can Dao" className="img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">South Vietname - Con Dao</h3>
              <p className="card-description">Con Dao, a group of islands off the coast of Vietnam, is known for its pristine beaches, crystal-clear waters, and rich biodiversity.
                 It serves as a sanctuary for marine life and offers opportunities for snorkeling, diving, and beach relaxation.
                  The islands' untouched natural beauty and peaceful atmosphere make them an ideal destination for eco-tourism and wellness retreats.</p>
              <button className="card-btn">Read More...</button>
            </div>
          </div>


          <div className="card-card">
            <div className="card-image">
              <img src={Phu_Quoc} alt="Phu Quoc" className="img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">South Vietname - Phu Quoc</h3>
              <p className="card-description">Phu Quoc, the largest island in Vietnam's Gulf of Thailand, is known for its stunning beaches, lush jungles, and vibrant coral reefs.
                 It serves as a tropical paradise for relaxation and water sports.
                  The island's pristine environment and diverse wildlife make it an ideal destination for eco-tourism and nature lovers.</p>
              <button className="card-btn">Read More...</button>
            </div>
          </div>


          <div className="card-card">
            <div className="card-image">
              <img src={Vung_Tau} alt="Vung Tau" className="img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">South Vietname - Vung Tau</h3>
              <p className="card-description">Vung Tau, a coastal city in southern Vietnam, is known for its beautiful beaches, modern infrastructure, and vibrant nightlife.
                 It serves as a popular destination for beach lovers and those seeking a lively atmosphere.
                  The city's proximity to the sea makes it an ideal location for water sports and marine activities.</p>
              <button className="card-btn">Read More...</button>
            </div>
          </div>

          <div className="card-card">
            <div className="card-image">
              <img src={Cao_Bang} alt="Cao Bang" className="img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">North Vietname - Cao Bang</h3>
              <p className="card-description">Cao Bang, a province in northern Vietnam, is known for its stunning natural landscapes, including waterfalls, mountains, and forests.
                 It serves as a destination for nature lovers and those seeking a peaceful retreat.
                  The region's rich cultural heritage and traditional villages add to its appeal.</p>
              <button className="card-btn">Read More...</button>
            </div>
          </div>

          <div className="card-card">
            <div className="card-image">
              <img src={Ha_Giang} alt="Ha Giang" className="img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">North Vietname - Ha Giang</h3>
              <p className="card-description">Ha Giang, a province in northern Vietnam, is known for its breathtaking mountainous landscapes, ethnic minority cultures, and remote villages.
                 It serves as a destination for adventure seekers and those interested in experiencing authentic rural life.
                  The region's natural beauty and cultural diversity make it an attractive spot for tourists.</p>
              <button className="card-btn">Read More...</button>
            </div>
          </div>

          <div className="card-card">
            <div className="card-image">
              <img src={Halong_Bay} alt="Halong Bay" className="img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">North Vietname - Halong Bay</h3>
              <p className="card-description">Halong Bay, a UNESCO World Heritage site in northern Vietnam, is known for its stunning limestone karsts, emerald waters, and countless islands.
                 It serves as a destination for cruise lovers and those seeking a unique natural experience.
                  The bay's dramatic scenery and rich biodiversity make it a must-visit location for tourists.</p>
              <button className="card-btn">Read More...</button>
            </div>
          </div>
          
          <div className="card-card">
            <div className="card-image">
              <img src={Hanoi} alt="Hanoi" className="img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">North Vietname - Hanoi</h3>
              <p className="card-description">Hanoi, the capital city of Vietnam, is known for its rich history, vibrant culture, and delicious cuisine.
                 It serves as a destination for those interested in exploring the country's political and cultural heritage.
                  The city's blend of traditional and modern elements makes it a fascinating place to visit.</p>
              <button className="card-btn">Read More...</button>
            </div>
          </div>

           <div className="card-card">
            <div className="card-image">
              <img src={Ninh_Binh} alt="Ninh Binh" className="img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">North Vietname - Ninh Binh</h3>
              <p className="card-description">Ninh Binh, a province in northern Vietnam, is known for its stunning karst landscapes, lush greenery, and rich cultural heritage.
                 It serves as a destination for nature lovers and those interested in experiencing Vietnam's natural beauty.
                  The region's scenic spots and historical sites make it an attractive location for tourists.</p>
              <button className="card-btn">Read More...</button>
            </div>
          </div>

          <div className="card-card">
            <div className="card-image">
              <img src={Sapa} alt="Sapa" className="img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">North Vietname - Sapa</h3>
              <p className="card-description">Sapa, a province in northern Vietnam, is known for its terraced rice fields, mountainous landscapes, and diverse ethnic minority cultures.
                 It serves as a destination for trekking enthusiasts and those interested in experiencing Vietnam's natural beauty.
                  The region's scenic spots and cultural sites make it an attractive location for tourists.</p>
              <button className="card-btn">Read More...</button>
            </div>
          </div>



          <div className="card-card">
            <div className="card-image">
              <img src={photo2} alt="photo2" className="img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Scottish Highlands</h3>
              <p className="card-description">Glenfinnan Viaduct</p>
              <button className="card-btn">Read More...</button>
            </div>
          </div>

          <div className="card-card">
            <div className="card-image">
              <img src={photo3} alt="photo3" className="img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Scottish Highlands</h3>
              <p className="card-description">Glenfinnan Viaduct</p>
              <button className="card-btn">Read More...</button>
            </div>
          </div>

          <div className="card-card">
            <div className="card-image">
              <img src={photo4} alt="photo3" className="img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Scottish Highlands</h3>
              <p className="card-description">Glenfinnan Viaduct</p>
              <button className="card-btn">Read More...</button>
            </div>
          </div>

          <div className="card-card">
            <div className="card-image">
              <img src={photo5} alt="photo5" className="img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Scottish Highlands</h3>
              <p className="card-description">Glenfinnan Viaduct</p>
              <button className="card-btn">Read More...</button>
            </div>
          </div>

          <div className="card-card">
            <div className="card-image">
              <img src={photo6} alt="photo6" className="img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Scottish Highlands</h3>
              <p className="card-description">Glenfinnan Viaduct</p>
              <button className="card-btn">Read More...</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
