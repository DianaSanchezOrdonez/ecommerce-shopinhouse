import React, {useContext} from "react";
import { Button, Modal, Form } from "react-bootstrap";

import { getFirestore } from "../../firebase/index";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

const BuyerForm = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  const { dataUser } = useContext(AuthContext);
  const { cart, finalTotal } = useContext(CartContext)

  /* const savedDataCheckout = () => {
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
      }; */

      console.log('cart', cart)

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>
            Buyer
          {/* Buyer {docRef ? "Id Checkout " + docRef : null} */}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="username" >
            <Form.Control type="text" placeholder={dataUser ? dataUser.username : "Username"} disabled /> 
          </Form.Group>
          <Form.Group controlId="email" >
            <Form.Control type="email" placeholder={dataUser ? dataUser.email : "Email"} disabled />
          </Form.Group>
          <div className="resume-items">
            {cart.map((product) =>  { return <div className="row justify-content-between">
                <span>{product.title}</span>
                <span>{product.price}</span>
            </div>})}
          </div>
          <Form.Group className="row justify-content-end">
            <Form.Label>Total</Form.Label>
            <span>{finalTotal}</span>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BuyerForm;
