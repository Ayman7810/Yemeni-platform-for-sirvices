import React from "react";
import { Header, Container, Fotter } from "./export-Files";
import Home from "./Pages/Home/Home";
import InsertData from "./Pages/InsertData/InsertData";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import Services from "./Pages/Services/Services";
import { HashRouter as Router, Route, Routes, HashRouter } from "react-router-dom";
import { NewsPage } from "./Pages/Home/News/News";
import { AboutUsPage } from "./Pages/Home/AboutUs/AboutUs";
import { ContactPage } from "./Pages/Home/Contact/Contact";
import Login from "./Pages/Login/Login";
const App = () => {
  return (
    <>
      <HashRouter>
        <Header />
        <Container>
          <Routes>
            <Route exact path="/"  Component={Home} />
            <Route exact path="/Login"  Component={Login} />
            <Route  path="/Services/:id" Component={Services} />
            <Route exact path="/NewsPage"  Component={NewsPage} />
            <Route exact path="/AboutUsPage"  Component={AboutUsPage} />
            <Route exact path="/ContactPage"  Component={ContactPage} />
            <Route exact  path="/Services" Component={Services} />
            <Route  path="ServiceDetails"  Component={ServiceDetails}  />
            <Route  path="ServiceDetails/:id"  Component={ServiceDetails}  />
            <Route  path="/InsertData"  Component={InsertData}  />
          </Routes>
        </Container>
        <Fotter />
      </HashRouter>
    </>
  );
};

export default App;
