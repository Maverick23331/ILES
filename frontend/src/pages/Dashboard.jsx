import { useEffect, useState } from "react";
import API from "../services/api";
import Layout from "../components/Layout";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get("/user"); // adjust endpoint
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, []);

  return (
    <Layout>
      <h1>Dashboard</h1>

      {user ? (
        <p>Welcome, {user.username}</p>
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  );
}

export default Dashboard;