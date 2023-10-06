import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Register = () => {
    const signupNameRef = useRef()
    const signupEmailRef = useRef()
    const signupPasswordRef = useRef()
    const [showHome,setShowHome]=useState(false)
   const [show,setShow]=useState(false)
    const localSignUp = localStorage.getItem("signUp")
    const localEmail = localStorage.getItem("signupEmailRef")
    const localPassword = localStorage.getItem("signupPasswordRef")
    const localName = localStorage.getItem("signupNameRef")
    useEffect(()=>{
        if(localSignUp){
            setShowHome(true)
        }
        if(localEmail){
            setShow(true)
        }
       })
       const handleClick=()=>{
        if(signupNameRef.current.value&&signupEmailRef.current.value&&signupPasswordRef.current.value)
       {
         localStorage.setItem("signupNameRef",signupNameRef.current.value)
         localStorage.setItem("signupEmailRef",signupEmailRef.current.value)
         localStorage.setItem("signupPasswordRef",signupPasswordRef.current.value)
         localStorage.setItem("signUp",signupEmailRef.current.value)
         alert("Account created successfully!!")
         window.location.reload()
       }
    }
    

    return (
        <Helmet title="Signup">
            <CommonSection title="Signup" />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" className="m-auto text-center">
                            <form className="form mb-5" >
                                <div className="form__group">
                                    <input
                                        type="text"
                                        placeholder="Full name"
                                        required
                                        ref={signupNameRef}
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        ref={signupEmailRef}
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        required
                                        ref={signupPasswordRef}
                                    />
                                </div>

                                <button type="submit" onClick={handleClick} className="addTOCart__btn">
                                    Sign Up
                                </button>

                            </form>
                            <Link to="/login">Already have an account? Login</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Register;