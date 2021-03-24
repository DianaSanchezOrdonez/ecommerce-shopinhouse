import React, {useState, useEffect} from 'react';
import { Modal } from "react-bootstrap";

import wellDone from "../../assets/wellDone.svg";
import Loader from "../loader/Loader";

import "./buyerform.css";

const BuyerResponse = ({isSubmited, setIsSubmited, docRef, urlPayment}) => {

    const handleClose = () => setIsSubmited(false);
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
        <h4>Payment Link: {urlPayment}</h4> </> : <Loader /> }
        
      </Modal.Body>
    </Modal>
    )
}

export default BuyerResponse
