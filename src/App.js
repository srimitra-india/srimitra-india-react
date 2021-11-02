import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import ContactUs from "./components/misc-components/ContactUsForm";
import Survey from "./components/misc-components/Survey";
import Recources from "./components/Resources";
import WhyUs from "./components/WhyUs";
import Footer from "./Footer";
import Nav from "./Nav";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Switch>
                    <Route path="/about-us">
                        <AboutUs />
                    </Route>
                    <Route path="/why-us">
                        <WhyUs />
                    </Route>
                    <Route path="/recources">
                        <Recources />
                    </Route>
                    <Route path="/contact">
                        <ContactUs />
                    </Route>
                    <Route path="/survey">
                        <Survey />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
