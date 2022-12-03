import React from 'react'
import { Button, Col } from 'react-bootstrap'

const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col sm={12} md={6} lg={6} xl={4} className="d-flex justify-content-center align-items-center">
      <a href={url} target="_blank">
        <div className="proj-imgbx" style={{width: '350px', height: '240px'}}>
            <img className="img-fluid" src={imgUrl} />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                <br />
                <u style={{fontSize: '12px', color: '#6F6C3E'}}>點按前往</u>
            </div>
        </div>
      </a>
    </Col>
  )
}

export default ProjectCard