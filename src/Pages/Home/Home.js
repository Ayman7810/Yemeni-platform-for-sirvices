import { AboutUs, Hero, News, Servicess, Statistics } from "../../export-Files";
import Contact from "./Contact/Contact";

import "./Home.css";
const Home = () => {
  return (
    <>
      <Hero />
      <Statistics />
      <Servicess />
      <News />
      <AboutUs />
      <Contact />
    </>
  );
};

export default Home;
