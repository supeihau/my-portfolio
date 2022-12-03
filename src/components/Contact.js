import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Envelope } from 'react-bootstrap-icons';
import { Facebook } from 'react-bootstrap-icons';
import { Github } from 'react-bootstrap-icons';
import { BookHalf } from 'react-bootstrap-icons';
import { Balloon } from 'react-bootstrap-icons';
import { GeoAlt } from 'react-bootstrap-icons';
import { Telephone } from 'react-bootstrap-icons';

const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        messenge: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    //async 非同步函式
    // 被呼叫時，Promise 的狀態將為一個帶有該回傳值的 resolved。如果 async 函式拋出例外或某個值，Promise 的狀態將為一個帶有被拋出值的 rejected。
    const handleSubmit = async (e) => {
        e.preventDefault(); //畫面不跳轉
        setButtonText('Sending...'); //送出時按鈕顯示Sending
        // await: 暫停async函式的執行，並等待傳遞至表達式的Promise解析，解析完之後回傳解析值，並繼續async函式
        let response = await fetch("http://localhost:5000/contact", {
            //fetch api 提供一個能獲取網路資源在的資源介面
            //使用fetch來POST JSON 格式的資料，得到輸入者輸入的內容 
            method: "POST",
            headers: {
                "Contact-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = response.jason(); //得到輸入者輸入的內容
        setFormDetails(formInitialDetails);
        // 是否送出成功的回應
        if (result.code === 200) {
            setStatus({ success: true, message: "Message sent successfully" });
        } else {
            setStatus({ successs: false, message: "Something went wrong, please try again later." })
        }
    };


    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={12}>
                        <div>
                            <h2 style={{ color: '#5C493E', textAlign: 'center' }}>Personal Information</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="pt-3 d-flex justify-content-center align-content-center">
                        <div>
                            <div className="social-icon">
                                <a>
                                    <BookHalf color="#6F6C3E" size={20} />
                                </a>
                                <p style={{ color: '#BF6730', display: 'inline', fontSize: '19px' }}>國立彰化師範大學資訊管理系</p>
                            </div><br />

                            <div className="social-icon pt-3">
                                <a>
                                    <Balloon color="#6F6C3E" size={20} />
                                </a>
                                <p style={{ color: '#BF6730', display: 'inline', fontSize: '19px' }}>2000/02/17</p>
                            </div><br />

                            <div className="social-icon pt-3">
                                <a>
                                    <GeoAlt color="#6F6C3E" size={20} />
                                </a>
                                <p style={{ color: '#BF6730', display: 'inline', fontSize: '19px' }}>新北市, 淡水區</p><br />
                            </div><br />

                            <div className="social-icon pt-3">
                                <a>
                                    <Telephone color="#6F6C3E" size={20} />
                                </a>
                                <p style={{ color: '#BF6730', display: 'inline', fontSize: '19px' }}>0928-453-360</p><br />
                            </div><br />
                        </div>
                    </Col>

                    <Col md={6} className="pt-3 d-flex justify-content-center align-content-center">
                        <div>
                            <div className="social-icon">
                                <a>
                                    <Envelope color="#6F6C3E" size={20} />
                                </a>
                                <p style={{ color: '#BF6730', display: 'inline', fontSize: '19px' }}>selina240@gmail.com</p>
                            </div><br />

                            <div className="social-icon pt-3">
                                <a>
                                    <Facebook color="#6F6C3E" size={20} />
                                </a>
                                <p style={{ color: '#BF6730', display: 'inline', fontSize: '19px' }}>蘇姵華</p>
                            </div><br />

                            <div className="social-icon pt-3">
                                <a>
                                    <Github color="#6F6C3E" size={20} />
                                </a>
                                <p style={{ color: '#BF6730', display: 'inline', fontSize: '19px' }}>github.com/supeihau</p><br />
                            </div><br />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Contact