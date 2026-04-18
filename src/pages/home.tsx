// import Carousel from "../Components/carousel";
// export default function Home() {
//   return (
//     <div>
//       <div className="p-6">
//         <Carousel images={["/img1.jpg", "/img2.jpg", "/img3.jpg"]} />
//       </div>
//       <div>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </p>
//       </div>
//     </div>
//   );
// }

import Carousel from "../Components/carouselsection";
import Card from "../Components/card";

const Home = () => {
  return (
    <section id="home" className="pt-20 px-6">
      <Carousel />
      <div className="text-center py-12">
        <p className="text-gray-600 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.{" "}
        </p>
      </div>
      <Card />
    </section>
  );
};

export default Home;
