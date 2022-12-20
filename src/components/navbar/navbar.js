import React from "react";
import "./navbar.css";
import { Button} from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";
export default function Topbar() {
  const { logOut, user } = useUserAuth();
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
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">lamaadmin</span>
        </div>
        <div className="topRight">
            {user && user.email}
            <Button variant="primary" onClick={handleLogout}>
              Log out
            </Button>
        </div>
      </div>
    </div>
  );
}
