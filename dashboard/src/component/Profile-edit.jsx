function Profile() {
return (
<div className="container">
    <div className="row mt-4">
        <p className="fs-5 pb-3 border-bottom mb-4">Account security</p>
        <div className="col-12 col-md-5">
            <p className="fs-4 mb-3">Change password</p>
            <form className="d-flex flex-column gap-4">
                <input className="form-control" type="password" placeholder="Current password" aria-label="Current password"
                    required />
                <input className="form-control" type="password" placeholder="New password" aria-label="New password"
                    required />
                <input className="form-control" type="password" placeholder="Confirm new password"
                    aria-label="Confirm new password" required />

                <div className="d-flex gap-3">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    <button type="button" className="btn btn-secondary">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
        <div className="col-1"></div>
        <div className="col-12 col-md-5">
            <p className="fs-5 my-3 pt-3 pt-md-0">Password tips</p>
            <ul className="text-14">
                <li className="my-2">Choose long passwords.</li>
                <li className="lh-base pe-3">
                    Meaningless phrases made up of multiple words make for secure passwords.
                    These are memorable and cannot be guessed easily. Example:
                    <span className="opacity-50"> icy mangoes fly kites high</span>.
                </li>
            </ul>
        </div>
    </div>
    <div className="row border-top mt-3 pt-3 mb-0">
        <p className="fs-4 mb-3">External 2FA TOTP</p>
        <div className="col-12 col-md-3 text-center">
            <img src="images/totp.svg" alt="totp security icon" className="img-fluid w-50" />
        </div>
        <div className="col-12 col-md-6 mt-3 mt-md-0">
            <p className="lh-base mb-3">
                Use external TOTP apps like Google® Authenticator, Microsoft® Authenticator, or Authy
                to generate 6-digit codes for login.
                <a href="#" className="text-decoration-none">Learn more</a>. Even if TOTP is enabled, login with mobile app code is still available.
            </p>
            <button className="btn btn-primary mb-3">Enable external TOTP</button>
            <p className="opacity-50 mb-0">
                An OTP will be sent to your email for verification first.
            </p>
        </div>
    </div>
</div>
);
}

export default Profile;