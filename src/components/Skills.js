import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import skillsLine from '../assets/img/skills-line.png';
import meter80 from "../assets/img/meter80.png";
import meter90 from "../assets/img/meter90.png";
import meter75 from "../assets/img/meter75.png";
import meter65 from "../assets/img/meter65.png";
import meter70 from "../assets/img/meter70.png";

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div>
            <img src={skillsLine} alt="Header Img"
                style={{
                    position: 'relative', zIndex: '1',
                    width: '462px', height: '300px', marginTop: '-240px'
                }} />

            <section className="skill" id="skills" style={{ zIndex: '0' }}>
                <Container>
                    <Row>
                        <Col className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <Row>
                                <Col xl={4}>
                                    <Card style={{ height: '400px', borderRadius: '30px', marginTop: '35px' }}>
                                        <Card.Body>
                                            <Card.Title className="p-2" style={{ color: '#6F6C3E', fontSize: '25px', fontWeight: '900' }}>前端工程</Card.Title>
                                            <Card.Text style={{ color: '#5C493E' }}>
                                                <div className="d-flex justify-content-center align-content-center">
                                                    <div className="text-start">
                                                        <li>熟悉 HTML5、CSS3</li>
                                                        <li>能高度還原設計稿</li>
                                                        <li>手刻各式 RWD 切版</li>
                                                        <li>具 Bootstrap 5 開發經驗</li>
                                                    </div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>

                                        <Carousel responsive={responsive} infinite={true}
                                            className="skill-slider">
                                            <div className="item">
                                                <img className="img-fluid" src={meter90} alt="Image" />
                                                <h5 style={{ color: '#BF6730' }}>Html/Css</h5>
                                            </div>
                                            <div className="item">
                                                <img className="img-fluid" src={meter90} alt="Image" />
                                                <h5 style={{ color: '#BF6730' }}>Bootstrap 5</h5>
                                            </div>
                                            <div className="item">
                                                <img className="img-fluid" src={meter75} alt="Image" />
                                                <h5 style={{ color: '#BF6730' }}>JavaScript</h5>
                                            </div>
                                        </Carousel>
                                    </Card>
                                </Col>

                                <Col xl={4}>
                                    <Card style={{ height: '400px', borderRadius: '30px', marginTop: '35px' }}>
                                        <Card.Body>
                                            <Card.Title className="p-2" style={{ color: '#6F6C3E', fontSize: '25px', fontWeight: '900' }}>平面設計</Card.Title>
                                            <Card.Text style={{ color: '#5C493E' }}>
                                                <div className="d-flex justify-content-center align-content-center">
                                                    <div className="text-start">
                                                        <li>平面插畫設計</li>
                                                        <li>宣傳圖文設計</li>
                                                        <li>UI/UX 使用者介面設計</li>
                                                        <li>熟悉相關設計軟體</li>
                                                    </div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>

                                        <Carousel responsive={responsive} infinite={true}
                                            className="skill-slider">
                                            <div className="item">
                                                <img className="img-fluid" src={meter80} alt="Image" />
                                                <h5 style={{ color: '#BF6730' }}>Photoshop</h5>
                                            </div>
                                            <div className="item">
                                                <img className="img-fluid" src={meter90} alt="Image" />
                                                <h5 style={{ color: '#BF6730' }}>Illustrator</h5>
                                            </div>
                                            <div className="item">
                                                <img className="img-fluid" src={meter70} alt="Image" />
                                                <h5 style={{ color: '#BF6730' }}>Figma</h5>
                                            </div>
                                        </Carousel>
                                    </Card>
                                </Col>

                                <Col xl={4}>
                                    <Card style={{ height: '400px', borderRadius: '30px', marginTop: '35px' }}>
                                        <Card.Body>
                                            <Card.Title className="p-2" style={{ color: '#6F6C3E', fontSize: '25px', fontWeight: '900' }}>學習中</Card.Title>
                                            <Card.Text style={{ color: '#5C493E' }}>
                                                <div className="d-flex justify-content-center align-content-center">
                                                    <div className="text-start">
                                                        <li>Git 版本控管與團隊協作</li>
                                                        <li>GitHub Pages 靜態網頁</li>
                                                        <li>React.js 前後端分離</li>
                                                        <li>JavaScript 網頁互動動畫</li>
                                                    </div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>

                                        <Carousel responsive={responsive} infinite={true}
                                            className="skill-slider">
                                            <div className="item">
                                                <img className="img-fluid" src={meter65} alt="Image" />
                                                <h5 style={{ color: '#BF6730' }}>React</h5>
                                            </div>
                                            <div className="item">
                                                <img className="img-fluid" src={meter65} alt="Image" />
                                                <h5 style={{ color: '#BF6730' }}>Git</h5>
                                            </div>
                                        </Carousel>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Skills