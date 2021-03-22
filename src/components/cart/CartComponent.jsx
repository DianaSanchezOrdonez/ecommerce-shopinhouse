import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

import "./cart.css";
import { Button, Modal, Form } from "react-bootstrap";
import {AiOutlineDelete} from "react-icons/ai";
import {IoBagCheckOutline} from "react-icons/io5";

import { getFirestore } from "../../firebase/index";

const CartComponent = () => {
  const CartContextUse = useContext(CartContext);
  const [show, setShow] = useState(false);
  const [usernameInput, setUsernameInput] = useState();
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState(" ");
  const [passwordInput2, setPasswordInput2] = useState();
  const [loading, setLoading] = useState(false);
  const [docRef, setDocRef] = useState();
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInput = (event) => {
    if (event.id === "username") {
      setUsernameInput(event.value);
    } else if (event.id === "email") {
      setEmailInput(event.value);
    } else if (event.id === "password") {
      setPasswordInput(event.value);
    } else {
      setPasswordInput2(event.value);
    }
  };

  const finalTotal = CartContextUse.cart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity * currentValue.item.price;
  }, 0);

  const savedDataCheckout = () => {
    //Necesito validar la data con mi bd
    setLoading(true);
    const db = getFirestore();
    const ordersCollection = db.collection("Orders");

    let newOrder = {
      buyer: {
        name: usernameInput,
        username: emailInput,
        password: passwordInput,
      },
      items: [...CartContextUse.cart],
      total: finalTotal,
    };

    ordersCollection
      .add(newOrder)
      .then((docRef) => {
        setDocRef(docRef.id);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

    //Reducir el stock en mi bd
  };

  const validForm = () => {
    if(usernameInput){
      if(emailInput){
        if(passwordInput.length >= 6 ){
          if(passwordInput === passwordInput2){
            savedDataCheckout() 
            setValidated(false)
          }else{
            alert('Passwords do not match')
          }
        }else{
          alert('The password must be 6 characters')
        }
      }else{
        alert('The field email is required')
      }
    }else{
      alert('The field username is required')
    }
    setValidated(true)
  }

  return (
    <>
      <div className="row justify-content-end">
        <Button variant="danger" onClick={() => CartContextUse.methods.clear()}>
          <AiOutlineDelete />
          Empty Cart
        </Button>
        <Button variant="primary" onClick={handleShow}>
          <IoBagCheckOutline/>
          Checkout
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Buyer {docRef ? "Id Checkout " + docRef : null}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated}>
            <Form.Group
              controlId="username"
              onChange={(e) => handleInput(e.target)}
            >
              <Form.Control type="text" placeholder="Username" required />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              controlId="email"
              onChange={(e) => handleInput(e.target)}
            >   
              <Form.Control type="email" placeholder="Email" required />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              controlId="password"
              onChange={(e) => handleInput(e.target)}
            >
              <Form.Control type="password" placeholder="Password" required />
              <Form.Control.Feedback>
                {passwordInput.length < 6 ? "Error" : "Looks good!"}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              controlId="password2"
              onChange={(e) => handleInput(e.target)}
            >
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                required
              />
              <Form.Control.Feedback>
                {passwordInput !== passwordInput2 ? "Error" : "Looks good!"}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="row justify-content-end">
              <Form.Label>Total</Form.Label>
              <span>$.{finalTotal}</span>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={validForm}>Save Changes</Button>
        </Modal.Footer>
      </Modal>

      <div className="product-table">
        <div className="product-image">
          <span>Image</span>
          <span>Description</span>
        </div>
        <span>Count</span>
        <span>U. Price</span>
        <span>Total Price</span>
      </div>
      {CartContextUse.cart.map((el) => {
        return (
          <>
            <div className="product-table" key={el.item.id}>
              <div className="product-image">
                <img src={el.item.image} alt="" />
                <span className="title-description">{el.item.title}</span>
              </div>
              <span>{el.quantity}</span>
              <span>$ {el.item.price}</span>
              <span>$ {el.quantity * el.item.price}</span>
              <button
                className="btn-delete"
                onClick={() => {
                  CartContextUse.methods.removeItem(el.item.id);
                }}
              >
                x
              </button>
            </div>
          </>
        );
      })}
    </>
  );
};

export default CartComponent;
