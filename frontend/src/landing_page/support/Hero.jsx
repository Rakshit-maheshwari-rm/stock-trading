import "./style.css"

function Hero() {
return (
<div className="support-top mt-5">
    <div className="container p-5">
        <div className="row mt-4">
            <div className="d-flex flex-wrap align-items-center">
                <h1>Support Portal</h1>
                <button className="btn btn-primary ms-auto">My tickets</button>
            </div>
            <div class="search-box pt-4">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Eg: How do I open my account, How do I activate F&Q..." />
            </div>
        </div>
    </div>
</div>
);
}

export default Hero;