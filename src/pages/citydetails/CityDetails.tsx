import { useNavigate, useParams } from "react-router-dom";

import cities from "../../data/data";

import "./CityDetails.css";

const CityDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const city = cities.find(
    (item) => item.id === id
  );

  if (!city) {
    return <h1>City Not Found</h1>;
  }

  return (
    <div className="details-page">

      <button
        type="button"
        onClick={() => navigate(-1)}
        className="absolute left-4 top-20 z-40 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 font-semibold text-slate-800 shadow-md backdrop-blur transition hover:bg-white md:left-8"
      >
        <span aria-hidden="true">&larr;</span>
        Back
      </button>

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