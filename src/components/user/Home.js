import React from "react";
import "./home.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";
const Home = () => {
  const { logOut, user, roleId } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      {user && user.email}
      <br />
      {roleId}
      <Button variant="primary" onClick={handleLogout}>
        Log out
      </Button>
    </>
  );
};

export default Home;
