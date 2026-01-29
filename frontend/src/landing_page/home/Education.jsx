function Education() {
    return ( 
        <div className="container p-lg-5">
            <div className="row">
                <div className="col-lg-6 col-12 p-md-5 pt-5">
                    <img src="/images/education.svg" alt="education_img" className="img-fluid"/>
                </div>
                <div className="col-lg-6 col-12 p-md-5 pt-5">
                    <h1 className="fs-3 text-muted mb-3">Free and open market education</h1>
                    <div>
                        <p className="opacity-75 mt-4">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href="#">Varsity &nbsp; <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div>
                        <p className="opacity-75 mt-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href="#">TradingQ&A &nbsp; <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Education;