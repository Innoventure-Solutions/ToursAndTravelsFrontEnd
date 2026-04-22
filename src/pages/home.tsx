import Carousel from "../Components/carousel";
import Card from "../Components/card";

const Home = () => {
  return (
    <section
      id="home"
      className="scroll-mt-20 pt-20 pb-10 px-4 md:px-10 bg-gray-50"
    >
      <Carousel />

      <div className="text-center py-8">
        <p className="text-gray-600 text-lg md:text-xl">
          Discover beautiful destinations and plan your perfect trip with us.
        </p>
      </div>

      <Card />
    </section>
  );
};

export default Home;
