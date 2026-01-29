import Footer from "../Footer";
import Navbar from "../Navbar";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import "./style.css";

function ProductPage() {
    return ( 
        <>
            <Navbar/>
            <Hero/>
            <LeftSection image={"images/kite.png"} productName={"Kite"} productDescription={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."} linkName1={"Try Demo"} linkName2={"Learn More"}/>
            <RightSection image={"images/console.png"} productName={"Console"} productDescription={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."} linkName={"Learn More"} />
            <LeftSection image={"images/coin.png"} productName={"Coin"} productDescription={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."} linkName1={"Coin"}/>
            <RightSection image={"images/kiteconnect.png"} productName={"Kite Connect API"} productDescription={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."} linkName={"Kite Connect"} />
            <LeftSection image={"images/varsity-products.svg"} productName={"Varsity mobile"} productDescription={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."} />
            <Universe/>
            <Footer/>
        </>
     );
}

export default ProductPage;