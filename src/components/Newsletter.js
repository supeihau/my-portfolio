import React from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import { useState, useEffect } from "react";

const Newsletter = ({ onValidated, status, message }) => {
    const [email, setEmail] = useState(""); //預設是email -> String 空值

    useEffect(() => {
        if (status === 'success') clearField()
    }, [status]) //當status更新且是success時，setEmail -> empty

    const handleSubmit = (e) => {
        e.preventDefault();
        email && //check email has actually entered
        email.indexOf("@") > -1 && //確認email含有@
        onValidated({ //module
            EMAIL: email
        })
    }

    //當email被成功寄送
    const clearField = () => {
        setEmail(""); //empty
    }


    return (
        <Col lg={12}>
            <div className="newsletter-bx wow slideInUp">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subcribe to our Newsletter</h3>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert varient="danger">{message}</Alert>}
                        {status === 'success' && <Alert varient="success">{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}

export default Newsletter