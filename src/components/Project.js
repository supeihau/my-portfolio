import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import PosterCard from './PosterCard';
import PostCard from './PostCard';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import posterImg1 from '../assets/img/posterImg1.png';
import posterImg2 from '../assets/img/posterImg2.png';
import smImg1 from '../assets/img/smImg1.png';
import smImg2 from '../assets/img/smImg2.png';
import smImg3 from '../assets/img/smImg3.png';
import smImg4 from '../assets/img/smImg4.png';
import smImg5 from '../assets/img/smImg5.jpg';
import smImg6 from '../assets/img/smImg6.jpg';
import smImg7 from '../assets/img/smImg7.jpg';
import smImg8 from '../assets/img/smImg8.jpg';
import webImg1 from '../assets/img/webImg1.png';
import webImg2 from '../assets/img/webImg2.png';
import webImg3 from '../assets/img/webImg3.png';
import webImg4 from '../assets/img/webImg4.png';
import webImg5 from '../assets/img/webImg5.png';
import webImg6 from '../assets/img/webImg6.png';
import webImg7 from '../assets/img/webImg7.png';
import TrackVisibility from 'react-on-screen';

const Project = () => {
    const posters = [
        {
            title: "Poster",
            description: "紅酒祭海報",
            imgUrl: posterImg1,
        },
        {
            title: "Poster",
            description: "動物園海報",
            imgUrl: posterImg2,
        },
    ];

    const SocialMedia = [
        {
            title: "Social Media",
            description: "彰師小生物-新生課程評價開放",
            imgUrl: smImg1,
            url:"https://www.instagram.com/p/ChPDlUSL8F8/",
        },
        {
            title: "Social Media",
            description: "彰師小生物-考古題",
            imgUrl: smImg2,
            url:"https://www.instagram.com/p/Cevh6dEJaw-/",
        },
        {
            title: "Social Media",
            description: "彰師小生物-控肉飯上的豬",
            imgUrl: smImg3,
            url:"https://www.instagram.com/p/CbHwGi7Jk32/",
        },
        {
            title: "Social Media",
            description: "彰師小生物-用一句話讓別人知道你的科系",
            imgUrl: smImg4,
            url:"https://www.instagram.com/p/CV4-HlPJkXI/",
        },
        {
            title: "Social Media",
            description: "彰師小生物-系費繳不繳",
            imgUrl: smImg5,
            url:"https://www.instagram.com/p/CT9XhWHJrN7/",
        },
        {
            title: "Social Media",
            description: "彰師小生物-必推通識課",
            imgUrl: smImg6,
            url:"https://www.instagram.com/p/CTenZetJSRy/",
        },
        {
            title: "Social Media",
            description: "彰師小生物-大笨鳥小學堂",
            imgUrl: smImg7,
            url:"https://www.instagram.com/p/CSysc8HpZeT/",
        },
        {
            title: "Social Media",
            description: "彰師小生物-IG帳號分享(學習篇)",
            imgUrl: smImg8,
            url:"https://www.instagram.com/p/CSHAy3SJCMG/",
        },
    ];

    const website = [
        {
            title: "Website",
            description: " 絲扇凄神社-電商平台",
            imgUrl: webImg1,
            url: "https://supeihau.github.io/437Jinja/index.html",
        },
        {
            title: "Landing Page",
            description: "彰師小生物-訂閱方案",
            imgUrl: webImg2,
            url: "https://ncuehulolo.idv.tw/subscribe/",
        },
        {
            title: "Landing Page",
            description: "彰師小生物-周邊商品",
            imgUrl: webImg3,
            url: "https://supeihau.github.io/hulolo-landing-pages/merchandise.html",
        },
        {
            title: "Landing Page",
            description: "彰師小生物-評價投稿",
            imgUrl: webImg4,
            url: "https://supeihau.github.io/hulolo-landing-pages/form.html",
        },
        {
            title: "Landing Page",
            description: "彰師小生物-評價審核",
            imgUrl: webImg5,
            url: "https://supeihau.github.io/hulolo-landing-pages/review.html",
        },
        {
            title: "React Project",
            description: "臺灣好天氣-即時天氣顯示",
            imgUrl: webImg7,
            url: "https://supeihau.github.io/realtime-weather-app/",
        },
        {
            title: "React Project",
            description: "代辦事件紀錄簿",
            imgUrl: webImg6,
            url: "https://supeihau.github.io/todos-list/",
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                    <h2>Projects</h2>
                                    <p>大學時期參與許多社團事務，包括彰師小生物、彰師大升學輔導種子計畫以及彰師大諮輔志工團。
                                        其中「彰師小生物」是提供學生課程評價搜尋的服務，目前收錄1000則以上的評價回饋。我主要負責粉絲專頁的文案平面設計，以及網站平台前端網頁的建置與維護，目前粉專有1300的追蹤人數，平台有6500以上的使用者，也藉此累積了很多作品及經驗。</p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Poster</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">SocialMedia</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Website</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            posters.map((project, index) => {
                                                return (
                                                    <PosterCard
                                                        ket={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            SocialMedia.map((project, index) => {
                                                return (
                                                    <PostCard
                                                        ket={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            website.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        ket={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}

export default Project