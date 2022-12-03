import React from 'react';
import { useState, useEffect } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import myPhoto from '../assets/img/myphoto.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    //要做特效的字，需typing and deleting
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDeleta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {
            clearInterval(ticker)
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i]; //=>某字串
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        //if(isDeleting = true), 特效字的切割(從第0格 - length-1)=>某字串

        setText(updatedText);

        if (!isDeleting) {
            setDeleta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) { //如果isDeleting=true 且字已經update完 =>typing特效完
            setIsDeleting(true);
            setDeleta(period);
        } else if (isDeleting && updatedText === '') { //正要typing特效
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDeleta(500);
        }

    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={7} xl={8}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h1>
                                        <div style={{ color: '#5C493E', paddingTop: '25px' }}>{`Hi, I'm Selina Su.`}<br /></div>
                                        <span className="wrap" style={{ color: '#F5B85D' }}>{text}</span>
                                        {/* {console.log(text)} */}
                                    </h1>
                                    <p style={{ color: '#5C493E' }}>我目前就讀彰化師範大學資管系的大四學生。過去對設計有興趣，自學設計軟體，產出一些平面設計作品，也加入社團協助進行粉專貼文圖片的設計和行銷文案發想；在進入資管系後，想將我對設計的興趣結合專業能力進行產出，便學習UIUX的介面設計，以及網頁切板和RWD等應用，並希望可以持續累積前端網頁設計的經驗和作品，增加前端工程的經歷。</p>
                                    <button style={{ color: '#BF6730' }} onClick={() => console.log('connect')}>聯絡我 <ArrowRightCircle size={25} color="#BF6730" /></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={5} xl={4}>
                            <img src={myPhoto} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner