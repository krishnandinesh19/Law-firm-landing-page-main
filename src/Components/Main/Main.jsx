import React from "react";
import Landing from "../Ladingpage/Landing";
import Cardpage from "../Cardpage/Cardpage";
import Photo from "../Photo/Photo";
import Client from "../Client/Client";
import Footer from "../Fooder/Footer";

const Home = () => {
  return (
    <div>
      <Landing />
      <Cardpage />
      <Photo />
      <Client />
      <Footer />
    </div>
  );
};

export default Home;
