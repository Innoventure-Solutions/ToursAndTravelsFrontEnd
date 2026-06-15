import { Helmet } from "react-helmet-async";
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
    return (
      <>
        <Helmet>
          <title>City Not Found | VietJourney 360</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <h1>City Not Found</h1>
      </>
    );
  }

  const pageTitle = `${city.title} Tour | VietJourney 360`;
  const canonicalUrl = `https://vietjourney360.com/city/${city.id}`;
  const absoluteCoverImage = `https://vietjourney360.com${city.coverImage}`;

  const touristDestinationJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: city.title,
    description: city.shortDescription,
    image: city.gallery.map((image) => `https://vietjourney360.com${image}`),
    url: canonicalUrl,
    touristType: "Leisure",
    isPartOf: {
      "@type": "Country",
      name: "Vietnam",
    },
  };

  return (
    <div className="details-page">

      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={city.shortDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={city.shortDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={absoluteCoverImage} />
        <script type="application/ld+json">
          {JSON.stringify(touristDestinationJsonLd)}
        </script>
      </Helmet>

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
              alt={`${city.title} - photo ${index + 1}`}
              loading="lazy"
              className="gallery-image"
            />

          ))}

        </div>

      </div>

    </div>
  );
};

export default CityDetails;