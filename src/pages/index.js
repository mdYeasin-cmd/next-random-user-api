import React, { useEffect, useState } from 'react';

const Home = () => {

  const [user, setUser] = useState({});

  const fetchARandomUser = () => {
    fetch('https://module-04-assignment-1-node-mongo.vercel.app/user/random')
      .then(res => res.json())
      .then(data => setUser(data));
  }

  useEffect(() => {
    fetchARandomUser();
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#1BA8F0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "red",
            margin: "0 auto"
          }}
        >
            <img style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%"
            }} src={user?.photoUrl} alt="User" />
        </div>
        <div style={{ margin: "20px 0" }}>
          <h1 style={{ marginBottom: "8px" }}>{user?.name}</h1>
          <p>{user?.address}</p>
        </div>
      </div>
      <button
        onClick={fetchARandomUser}
        style={{
          padding: "12px 25px",
          background: "rgba(255, 0, 0, 0.8)", 
          color: "#fff",
          border: 0,
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >Change Profile</button>
    </div>
  );
};

export default Home;