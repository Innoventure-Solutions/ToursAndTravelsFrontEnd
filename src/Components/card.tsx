import "./card.css";

import { useNavigate } from "react-router-dom";

import cities from "../data/data.ts";

const Card = () => {

  const navigate = useNavigate();

  return (
    <div className="text-center mt-8">

      <h2 className="text-3xl font-bold">
        Discover
      </h2>

      <p className="text-xl mt-4">
        Featured Destinations
      </p>

      <div className="card-page">

        <div className="card-grid">

          {cities.map((city) => (

            <div
              className="card-card"
              key={city.id}
            >

              <div className="card-image">

                <img
                  src={city.coverImage}
                  alt={city.title}
                  className="img"
                />

              </div>

              <div className="card-content">

                <h3 className="card-title">
                  {city.title}
                </h3>

                <p className="card-description">
                  {city.shortDescription}
                </p>

                <button
                  className="card-btn"
                  onClick={() =>
                    navigate(`/city/${city.id}`)
                  }
                >
                  Read More...
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Card;