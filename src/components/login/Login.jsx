import React, { useState } from "react";

import { Modal, Button, Tabs, Tab, Form } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";

import validateInfo from "../../utils/validateInfo.js";
/*----------------AUTHENTICATION SERVICE-------------------*/
import { createUserPassword } from "../../firebase/index";

import "./login.css";

const Login = ({show, setShow}) => {
  const [key, setKey] = useState("login");
  const [values, setValues] = useState({
    usernameLogin: '',
    emailLogin: '',
    passwordLogin: '',
    username: '',
    email: '',
    password: '',
    password2: ''
  })
  const [errors, setErrors] = useState({})

  const handleClose = () => setShow(false);

  /* createUserPassword(); */

  const handleChange = (event) => {
    const { id, value } = event.target
    setValues({
      ...values,
      [id]: value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateInfo(values))
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>

      <Modal.Body closeButton>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="login" title="Login">
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group controlId="usernameLogin" onChange={(e) => handleChange(e)} >
                <Form.Control type="text" placeholder="Username" className={errors.usernameLogin ? "error-label" : ""}/>
                 {errors.usernameLogin && <span className="error-feed">{errors.usernameLogin}</span>}
              </Form.Group>

              <Form.Group controlId="emailLogin" onChange={(e) => handleChange(e)}>
                <Form.Control type="email" placeholder="Email" className={errors.emailLogin ? "error-label" : ""}/>
                 {errors.emailLogin && <span className="error-feed">{errors.emailLogin}</span>}
              </Form.Group>

              <Form.Group controlId="passwordLogin" onChange={(e) => handleChange(e)}>
                <Form.Control type="password" placeholder="Password" className={errors.passwordLogin ? "error-label" : ""}/>
                 {errors.passwordLogin && <span className="error-feed">{errors.passwordLogin}</span>}
              </Form.Group>

              <button
                className="row justify-content-center btn-submit"
                type="submit"
              >
                Login
              </button>
            </Form>
          </Tab>
          <Tab eventKey="register" title="Register">
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group controlId="username" onChange={(e) => handleChange(e)}>
                <Form.Control type="text" placeholder="Username" className={errors.username ? "error-label" : ""} />
                {errors.username && <span className="error-feed">{errors.username}</span>}
              </Form.Group>

              <Form.Group controlId="email" onChange={(e) => handleChange(e)}>
                <Form.Control type="text" placeholder="Enter email" className={errors.username ? "error-label" : ""} />
                {errors.email && <span className="error-feed">{errors.email}</span>}
              </Form.Group>

              <Form.Group controlId="password" onChange={(e) => handleChange(e)}>
                <Form.Control type="password" placeholder="Password" className={errors.username ? "error-label" : ""} />
                {errors.password && <span className="error-feed">{errors.password}</span>}
              </Form.Group>

              <Form.Group controlId="password2" onChange={(e) => handleChange(e)}>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  className={errors.username ? "error-label" : ""}
                />
                {errors.password2 && <span className="error-feed">{errors.password2}</span>}
              </Form.Group>
              <span className="d-block text-center">or</span>
              <div className="d-flex-row justify-content-between">
                <button className="btn-register-social">
                  <FaFacebookF /> Register with Facebook
                </button>
                <button className="btn-register-social">
                  <AiOutlineGoogle /> Register with Google
                </button>
              </div>
              <button
                className="row justify-content-center btn-submit"
                type="submit"
              >
                Register
              </button>
            </Form>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
