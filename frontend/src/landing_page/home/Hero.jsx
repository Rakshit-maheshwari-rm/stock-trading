function Hero() {
    return ( 
        <div className="container mt-5 p-5">
            <div className="row text-center mb-2 mb-lg-5">
                <img src="/images/homeHero.png" alt="Home_hero_img" className="img-fluid mb-4"/>
                <h1 className="mt-4 fs-3">Invest in everything</h1>
                <p className="mb-5 fs-5 opacity-75">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <a href="/signup" className="btn btn-primary w-auto m-auto p-md-2 px-md-3 fs-md-5">Sign up for free</a>
            </div>
        </div>
     );
}
export default Hero;