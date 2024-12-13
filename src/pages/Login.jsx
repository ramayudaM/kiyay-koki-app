import React from "react";
import baner1 from "../assets/images/banner/baner.jpg";
import LoginForm from "../components/LoginForm";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="main-bg">
            <div className="login-img d-flex">
                <img src={baner1} alt="login alt"
                style={{
                    width: "600px",
                    borderRadius: "20px",
                    marginLeft: "90px",
                    marginTop: "80px"
                }} />

                <div>
                    
                <h1 style={{
                    fontWeight: "700",
                    marginTop: "80px",
                    marginLeft: "12rem"
                }}>LOGIN/SIGN UP</h1>
                
                <div style={{marginLeft: "160px", marginTop: "60px"}}>
                <LoginForm/>
                </div>

                <Link to={`/OtpPage`}>
                <Button style={{
                    marginLeft: "270px",
                    marginTop: "100px",
                    width: "150px",
                    borderRadius: "30px",
                    background: "#9984f5",
                    border: "none"
                }}>LOGIN</Button>
                </Link>
                </div>
            </div>

        </div>
    )
}

export default Login;