import React, {useState} from 'react';
import { Modal } from "react-bootstrap";

import wellDone from "../../assets/wellDone.svg";
import "./buyerform.css";

const BuyerResponse = ({isSubmited, setIsSubmited, docRef}) => {

    const handleClose = () => setIsSubmited(false);

    return (
    <Modal show={isSubmited} onHide={handleClose}>
      <Modal.Body className="d-flex-column">
        <img className="img-sucess" src={wellDone} alt="img-success-buy"></img>
        <h3>Successful purchase!</h3>
        <h4>{docRef}</h4>
      </Modal.Body>
    </Modal>
    )
}

export default BuyerResponse
