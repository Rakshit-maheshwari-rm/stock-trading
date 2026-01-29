import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const DASHBOARD_URL = import.meta.env.VITE_DASHBOARD_URL;

  const handleOnChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${BACKEND_URL}/login`,
        {
          email: form.email,
          password: form.password,
        },
        { withCredentials: true }
      );

      if (res.data.success) {
        toast.success("Login successful!");
        setTimeout(() => {
          window.location.href = DASHBOARD_URL;
        }, 1000);
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-sm-10 col-md-6 col-lg-4">
          <div className="card p-5 shadow rounded-5">
            <h2 className="text-center mb-4">Login Account</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
              <p className="text-center mt-3 mb-0">
                Create account? <Link to="/signup">Signup</Link>
              </p>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
