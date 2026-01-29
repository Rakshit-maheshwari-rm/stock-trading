import Hero from "./Hero";
import Charges from "./Charges";
import ChargesExplained from "./ChargesExplained";
import Navbar from "../Navbar";
import Footer from "../Footer";

function PricingPage() {
    return ( 
        <>
            <Navbar/>
            <Hero/>
            <Charges/>
            <ChargesExplained/>
            <Footer/>
        </>
     );
}

export default PricingPage;