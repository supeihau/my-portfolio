import React from 'react'
import { Col } from 'react-bootstrap'

const PosterCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col sm={12} md={6} lg={4} xl={3} className="d-flex justify-content-center align-items-center">
      <a href={url} target="_blank">
        <div className="proj-imgbx" style={{width: '255px', height: '359px'}}>
            <img className="img-fluid" src={imgUrl} />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
      </a>
    </Col>
  )
}

export default PosterCard