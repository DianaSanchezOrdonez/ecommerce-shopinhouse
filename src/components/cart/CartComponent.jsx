import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

import "./cart.css";
import { Button, Modal, Form } from "react-bootstrap";
import * as IconName from "react-icons/io5";
import Loader from "../../components/loader/Loader";

import { getFirestore } from "../../firebase/index";

const CartComponent = () => {
  const CartContextUse = useContext(CartContext);
  const [show, setShow] = useState(false);
  const [nameInput, setNameInput] = useState();
  const [phoneInput, setPhoneInput] = useState();
  const [emailInput, setEmailInput] = useState();
  const [loading, setLoading] = useState(false);
  const [docRef,setDocRef] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInput = (event) => {
    if (event.id === "name") {
      setNameInput(event.value);
    } else if (event.id === "phone") {
      setPhoneInput(event.value);
    } else {
      setEmailInput(event.value);
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
        name: nameInput,
        phone: phoneInput,
        email: emailInput,
      },
      items: [...CartContextUse.cart],
      total: finalTotal,
    };

    ordersCollection
      .add(newOrder)
      .then((docRef) => {
        setDocRef(docRef.id)
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      }); 

    //Reducir el stock en mi bd

  };

  return (
    <>
      <div className="row justify-content-end">
        <Button variant="danger" onClick={() => CartContextUse.methods.clear()}>
          <IconName.IoTrashBinOutline />
          Empty Cart
        </Button>
        <Button variant="primary" onClick={handleShow}>
          {" "}
          Checkout{" "}
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Buyer {docRef ? 'Id Checkout ' + docRef : null}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              controlId="name"
              onChange={(e) => handleInput(e.target)}
            >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="John Watson" />
            </Form.Group>
            <Form.Group
              controlId="phone"
              onChange={(e) => handleInput(e.target)}
            >
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="999 999 999" />
            </Form.Group>
            <Form.Group
              controlId="email"
              onChange={(e) => handleInput(e.target)}
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
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
          <Button variant="secondary" onClick={savedDataCheckout}>
            Save Changes
          </Button>
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
