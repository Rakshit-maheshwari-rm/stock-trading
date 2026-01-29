import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const FRONT_URL = import.meta.env.VITE_FRONT_URL; 

export default function ProtectedRoute({ children }) {
 const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(`${API_URL}/check`, {
          withCredentials: true,
        });

        if (res.data.loggedIn) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      } catch (err) {
        setLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!loggedIn) {
    window.location.href = `${FRONT_URL}/login`;
    return null;
  }
  return children;
}
