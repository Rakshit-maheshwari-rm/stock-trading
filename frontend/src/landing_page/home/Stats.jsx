function Stats() {
return (
<div className="container p-lg-4">
    <div className="row align-items-center">
        <div className="col-lg-5 col-12 p-lg-5">
            <h1 className="fs-3 text-muted mb-5">Trust with confidence</h1>
            <div className="row mb-4">
                <div className="col-12">
                    <h3 className="fs-4 text-muted">Customer-first always</h3>
                    <p className="opacity-75">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of
                        equity investments, making us India’s largest broker; contributing to 15% of daily retail
                        exchange volumes in India.</p>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-12">
                    <h3 className="fs-4 text-muted">No spam or gimmicks</h3>
                    <p className="opacity-75">No gimmicks, spam, "gamification", or annoying push notifications. High
                        quality apps that you use at your pace, the way you like.</p>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-12">
                    <h3 className="fs-4 text-muted">The Zerodha universe</h3>
                    <p className="opacity-75">Not just an app, but a whole ecosystem. Our investments in 30+ fintech
                        startups
                        offer you tailored services specific to your needs.</p>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-12">
                    <h3 className="fs-4 text-muted">Do better with money</h3>
                    <p className="opacity-75">With initiatives like Nudge and Kill Switch, we don't just facilitate
                        transactions, but actively help you do better with your money.</p>
                </div>
            </div>
        </div>
        <div className="col-lg-7 col-12 text-center p-md-5">
            <img src="/images/ecosystem.png" alt="eco_system_img" className="img-fluid" />
            <a href="/products" className="mx-auto px-5">Explore our products &nbsp;<i
                    className="fa-solid fa-arrow-right"></i></a>
            <a href="#">Try Kite demo &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="text-center m-lg-0 m-4">
            <img src="/images/pressLogos.png" alt="press_logo_img" className="img-fluid" />
        </div>
    </div>
</div>
);
}
export default Stats;