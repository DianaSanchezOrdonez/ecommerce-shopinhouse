import React, { useState } from "react";

import { Modal, Button, Tabs, Tab, Form } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import {AiOutlineGoogle} from "react-icons/ai"

import './login.css';

const Login = () => {
  const [key, setKey] = useState("login");
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal  show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      </Modal.Header>

      <Modal.Body closeButton>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="login" title="Login">
            <Form>
                <Form.Group controlId="username">
                    <Form.Control type="text" placeholder="Username" required/>
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Control type="email" placeholder="Email" required/>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>

                <button class="row justify-content-center btn-submit" type="submit">Login</button>
            </Form>
          </Tab>
          <Tab eventKey="register" title="Register">
            <Form>
                <Form.Group controlId="usernameRegister">
                    <Form.Control type="text" placeholder="Username" required/>
                </Form.Group>

                <Form.Group controlId="emailRegister">
                    <Form.Control type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group controlId="passwordRegister">
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>

                <Form.Group controlId="passwordRegister2">
                    <Form.Control type="password" placeholder="Confirm Password" required/>
                </Form.Group>
                <span className="d-block text-center">or</span>
                <div className="d-flex-row justify-content-between">
                    <button class="btn-register-social"><FaFacebookF/> Register with Facebook</button>
                    <button class="btn-register-social"><AiOutlineGoogle/> Register with Google</button>
                </div>
                <button class="row justify-content-center btn-submit" type="submit">Register</button>
            </Form>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
