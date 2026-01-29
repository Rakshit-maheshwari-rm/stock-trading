import { NavLink } from "react-router-dom";

function NotFound(){
return(
<div className="container m-5 p-5">
    <div className="row m-5 align-items-center">
        <div className="col-md-6 p-5">
        <h4>404</h4>
        <h5 className="my-5">We couldn’t find the page you were looking for.</h5>
        <NavLink to="/">Go Home</NavLink>
        </div>
        <div className="col-md-6 text-center">
            <img src="/images/404.jpg" alt="404_img" className="img-fluid rounded"/>
        </div>
    </div>
</div>
)
}

export default NotFound;