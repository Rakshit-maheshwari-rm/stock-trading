import Hero from "./Hero";
import OpenAccount from "../OpenAccount";
import Education from "./Education";
import Price from "./Price";
import Stats from "./Stats";
import "./style.css"
import Demo from "../Demo";
import { useState,useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function HomePage() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setShowPopup(true);
    }, []);

    return ( 
        <>
        <Navbar/>
        <Demo open={showPopup} onClose={() => setShowPopup(false)} />
        <Hero/>
        <Stats/>
        <Price/>
        <Education/>
        <OpenAccount/> 
        <Footer/>
        </>
    );
}

export default HomePage;