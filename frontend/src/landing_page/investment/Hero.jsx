function Hero(){
    return(
        <div className="container pt-5">
            <div className="row mt-5 p-5 text-center">
                <h1 className="fs-3 text-muted mb-3">Investments</h1>
                <p className="fs-5 opacity-75">Everything from equities and derivatives to mutual funds and fixed income</p>
                <p>Check out our <a href="/products">technology offerings&nbsp;<i className="fa-solid fa-arrow-right"></i></a></p>
                <div className="text-center mt-5">
                    <img src="images/investments-head.png" alt="investment_head_img" className="img-fluid w-50"/>
                </div>
            </div>
        </div>
    )
}
export default Hero;