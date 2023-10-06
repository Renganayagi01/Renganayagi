import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();
  const localEmail=localStorage.getItem("loginEmailRef")
  const localPassword=localStorage.getItem("loginPasswordRef")

  const submitHandler = () => {
    if(loginEmailRef.current.value==localEmail&&loginPasswordRef.current.value==localPassword){
      localStorage.setItem("Login",loginEmailRef.current.value)
      window.location.reload()
  }else{
      alert("Please Enter valid Credential")
  }
 }

  return (

    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mt-14">
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginEmailRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef}
                  />
                </div>

                <button type="submit" onSubmit={submitHandler} className="addTOCart__btn">
                  Login
                </button>
              </form>
              <Link to="/Register">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;