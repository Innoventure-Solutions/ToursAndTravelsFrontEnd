import { useParams } from "react-router-dom";

import cities from "../../data/data";

import "./CityDetails.css";

const CityDetails = () => {

  const { id } = useParams();

  const city = cities.find(
    (item) => item.id === id
  );

  if (!city) {
    return <h1>City Not Found</h1>;
  }

  return (
    <div className="details-page">

      <img
        src={city.coverImage}
        alt={city.title}
        className="details-cover"
      />

      <div className="details-content">

        <h1>{city.title}</h1>

        <p>{city.fullDescription}</p>

        <div className="gallery">

          {city.gallery.map((image, index) => (

            <img
              key={index}
              src={image}
              alt=""
              className="gallery-image"
            />

          ))}

        </div>

      </div>

    </div>
  );
};

export default CityDetails;