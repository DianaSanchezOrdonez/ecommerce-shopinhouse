import React, { useContext, memo, useState } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

import { Modal, Button, Tabs, Tab, Form } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import {AiOutlineShoppingCart, AiOutlineGoogle} from "react-icons/ai";
import "./cartwidget.css";

export const CartWidget = memo(
  () => {
    const CartContextUse = useContext(CartContext);
    const [hide, setHide] = useState(true);
    const history = useHistory();
    const [key, setKey] = useState("login");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div className="d-flex-row">
        <button className="btn-login-sidebar" onClick={handleShow}>
          Login
        </button>
        <Modal show={show} onHide={handleClose}>
        
          <Modal.Body closeButton>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="login" title="Login">
                <Form>
                  <Form.Group controlId="username">
                    <Form.Control type="text" placeholder="Username" required />
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Control type="email" placeholder="Email" required />
                  </Form.Group>

                  <Form.Group controlId="password">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </Form.Group>

                  <button
                    class="row justify-content-center btn-submit"
                    type="submit"
                  >
                    Login
                  </button>
                </Form>
              </Tab>
              <Tab eventKey="register" title="Register">
                <Form>
                  <Form.Group controlId="usernameRegister">
                    <Form.Control type="text" placeholder="Username" required />
                  </Form.Group>

                  <Form.Group controlId="emailRegister">
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="passwordRegister">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="passwordRegister2">
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      required
                    />
                  </Form.Group>
                  <span className="d-block text-center">or</span>
                  <div className="d-flex-row justify-content-between">
                    <button class="btn-register-social">
                      <FaFacebookF /> Register with Facebook
                    </button>
                    <button class="btn-register-social">
                      <AiOutlineGoogle /> Register with Google
                    </button>
                  </div>
                  <button
                    class="row justify-content-center btn-submit"
                    type="submit"
                  >
                    Register
                  </button>
                </Form>
              </Tab>
            </Tabs>
          </Modal.Body>
        </Modal>
        <button
          className={CartContextUse.cart.length ? "nav-icon" : "hide-list"}
          onClick={() => history.push("/cart")}
          onMouseEnter={() => setHide(false)}
          onMouseLeave={() => setHide(true)}
        >
          <AiOutlineShoppingCart />
          <span className="span-icon">{CartContextUse.cart.length}</span>
        </button>

        <ul className={hide ? "list-cart hide-list" : "list-cart"}>
          {CartContextUse.cart.map((product) => {
            return (
              <li className="d-flex-row" key={product.item.id}>
                <img src={product.item.image} />
                <span className="widget-description">{product.item.title}</span>
                <span>{product.quantity}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  },
  (oldProp, nextProp) => {
    return oldProp.CartContextUse === nextProp.CartContextUse;
  }
);
