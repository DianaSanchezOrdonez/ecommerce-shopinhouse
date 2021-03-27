import React, {useState, useEffect, useContext} from 'react';
import { Modal } from "react-bootstrap";

import wellDone from "../../assets/wellDone.svg";
import Loader from "../loader/Loader";

import { CartContext } from "../../context/CartContext";

import "./buyerform.css";

const BuyerResponse = ({isSubmited, setIsSubmited, docRef, urlPayment}) => {
    const { methods } = useContext(CartContext);
    const handleClose = () => {
      methods.clear();
      setIsSubmited(false);
    }
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if(!docRef && !urlPayment){
            setIsLoading(true)
        }else{
            setIsLoading(false)
        }
        return () => { }
    }, [])

    return (
    <Modal show={isSubmited} onHide={handleClose}>
      <Modal.Body className="d-flex-column">
        {docRef ? <><img className="img-sucess" src={wellDone} alt="img-success-buy"></img>
        <h2>Successful purchase!</h2>
        <h4>Order ID: {docRef}</h4>
        <h4><a className="color-primary" href={urlPayment} target="_blank">Payment Link</a></h4> </> : <Loader /> }
        
      </Modal.Body>
    </Modal>
    )
}

export default BuyerResponse
