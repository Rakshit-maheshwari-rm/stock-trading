function Universe() {
return (
<div className="container mb-md-5 pb-md-5">
    <div className="row text-center mt-5 pt-5 mt-lg-0 pt-lg-0">
        <p className="fs-5">Want to know more about our technology stack? Check out the <a href="#">Zerodha.tech</a> blog.</p>
        <h1 className="fs-4 mt-5 pt-4">The Zerodha Universe</h1>
        <p className="my-4">Extend your trading and investment experience even further with our partner platforms</p>
        <div className="d-flex flex-wrap p-lg-5 mt-2 universe">
            <a href="#" className="col-12 col-md-4">
                <img src="images/zerodhaFundhouse.png" alt="zerodha_fundHouse_img" className="img-fluid" />
                <p>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
            </a>
            <a href="#" className="col-12 col-md-4">
                <img src="images/sensibullLogo.svg" alt="sensibull_logo" className="img-fluid" />
                <p>Options trading platform that lets you
                    create strategies, analyze positions, and examine
                    data points like open interest, FII/DII, and more.
                </p>
            </a>
            <a href="#" className="col-12 col-md-4">
                <img src="images/tijori.svg" alt="tijori_logo" className="img-fluid" />
                <p>Investment research platform
                    that offers detailed insights on stocks,
                    sectors, supply chains, and more.</p>
            </a>
             <a href="#" className="col-12 col-md-4">
                <img src="images/streakLogo.png" alt="streak_logo" className="img-fluid" />
                <p>Systematic trading platform
                    that allows you to create and backtest
                    strategies without coding.</p>
            </a>
            <a href="#" className="col-12 col-md-4">
                <img src="images/smallcaseLogo.png" alt="smallcase_logo" className="img-fluid" />
                <p>Thematic investing platform
                    that helps you invest in diversified
                    baskets of stocks on ETFs.
                </p>
            </a>
            <a href="#" className="col-12 col-12 col-md-4">
                <img src="images/dittoLogo.png" alt="ditto_logo" className="img-fluid" />
                <p>Personalized advice on life
                    and health insurance. No spam
                    and no mis-selling.</p>
            </a>
        </div>
        <a href="/signup" className="btn btn-primary w-auto m-auto p-md-2 px-md-3 fs-md-5">Sign up for free</a>
    </div>
</div>
);
}

export default Universe;