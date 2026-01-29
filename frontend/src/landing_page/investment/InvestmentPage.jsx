import Hero from "./Hero";
import OpenAccount from "../OpenAccount";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Navbar from "../Navbar";
import Footer from "../Footer";

function InvestmentPage(){
    return(
        <>
            <Navbar/>
            <Hero/>
            <LeftSection image={"images/stocks.svg"} productName={"Stocks"} productDescription={"Trade stocks for delivery or intraday on over 5000 stocks listed on National Stock Exchange (NSE) and Bombay Stock exchange (BSE)."}/>
            <RightSection image={"images/mf.svg"} productName={"Direct mutual funds"} productDescription={"Invest in over 2000 direct mutual funds directly without a distributor. Save up to 1.5% in commissions every year."}/>
            <LeftSection image={"images/fo.svg"} productName={"Futures & Options"} productDescription={"Trade metals, oil, and agri commodities on MCX and stock and index futures and options on NSE."}/>
            <RightSection image={"images/ipo.svg"} productName={"IPO"} productDescription={"Now apply online and invest in companies listing on the Indian exchanges with an IPO (Initial Public Offering) with your BHIM UPI app. Read more"}/>
            <LeftSection image={"images/mf.svg"} productName={"Gift stocks"} productDescription={"Introduce your friends and family to the habit of investing for the long term by gifting them stocks, ETFs, mutual funds and gold bonds. A gift that keeps on giving."}/>
            <RightSection image={"images/fo.svg"} productName={"Fixed income"} productDescription={"Invest in bonds with yields better than bank FDs guaranteed by the Government of India. Invest in Gold electronically and gain market returns + fixed 2.5% per year on the invested amount, guaranteed by the Government of India."}/>
            <OpenAccount/>
            <Footer/>
        </>
    )
}

export default InvestmentPage;