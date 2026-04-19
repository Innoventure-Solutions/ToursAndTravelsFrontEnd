import Carousel from "../Components/carousel";
import Card from "../Components/card";

const Home = () => {
  return (
    <section id="home" className="pt-20 px-6">
      <Carousel />
      <div className="text-center py-14">
        <p className="text-gray-600 mt-3 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
          <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. <br />{" "}
        </p>
      </div>
      <Card />
    </section>
  );
};

export default Home;
