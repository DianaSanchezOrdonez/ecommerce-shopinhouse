import React, { useContext, useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

import { getFirestore } from "../../firebase/index";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

import BuyerResponse from "./BuyerResponse";

import "./buyerform.css";

const BuyerForm = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  const { dataUser } = useContext(AuthContext);
  const { methods, cart, finalTotal } = useContext(CartContext);
  const [docRef, setDocRef] = useState();
  const [urlPayment, setUrlPayment] = useState();
  const [isSubmited, setIsSubmited] = useState(false);

  const db = getFirestore();

  useEffect(() => {
    /* curl -X POST \
    'https://api.mercadopago.com/checkout/preferences' \
    -H 'content-type:application/json' \
    -H 'Authorization: Bearer ACCESS_TOKEN_ENV' \
    -d '{
            "items": [
                {
                "title": "Dummy Item",
                "description": "Multicolor Item",
                "quantity": 1,
                "currency_id": "[FAKER][CURRENCY][ACRONYM]",
                "unit_price": 10.0
                }
            ]
        }' */
    let formatJson = cart.map((el) => {
      return {
        title: el.item.title,
        description: el.item.title,
        quantity: el.quantity,
        currency_id: "ARS",
        unit_price: el.item.price,
      };
    });

    fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer APP_USR-4958099258653183-032320-59a44f1184085bca7d7c9693cdef89fa-733172012",
      },
      body: JSON.stringify({
        items: formatJson,
      }),
    })
      .then((result) => result.json())
      .then((values) => setUrlPayment(values.init_point));
  }, []);

  const savedDataCheckout = () => {
    //Necesito validar la data con mi bd
    const ordersCollection = db.collection("Orders");

    let newOrder = {
      buyer: {
        name: dataUser.username,
        username: dataUser.email,
      },
      items: [...cart],
      total: finalTotal,
    };

    ordersCollection
      .add(newOrder)
      .then((docRef) => {
        setDocRef(docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

    setIsSubmited(true);
    setShow(false);
    //methods.clear();
    //Reducir el stock en mi bd
  };

  return (
    <>
      {isSubmited ? (
        <BuyerResponse
          isSubmited={isSubmited}
          setIsSubmited={setIsSubmited}
          docRef={docRef}
          urlPayment={urlPayment}
        />
      ) : (
        ""
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Buyer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="username">
              <Form.Control
                type="text"
                placeholder={dataUser ? dataUser.username : "Username"}
                disabled
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Control
                type="email"
                placeholder={dataUser ? dataUser.email : "Email"}
                disabled
              />
            </Form.Group>
            <div className="resume-items">
              {cart.map((product) => {
                return (
                  <div className="card-item row justify-content-around">
                    <span className="resume-item-title">
                      {product.item.title}
                    </span>
                    <span className="resume-item-price">
                      $. {product.item.price}
                    </span>
                  </div>
                );
              })}
            </div>
            <Form.Group className="row justify-content-end">
              <Form.Label>Total</Form.Label>
              <span>$. {finalTotal}</span>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => savedDataCheckout()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BuyerForm;
