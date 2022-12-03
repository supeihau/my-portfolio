import React from 'react'
import { Col } from 'react-bootstrap'

const PostCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col sm={12} md={6} lg={4} xl={3} className="d-flex justify-content-center align-items-center">
      <a href={url} target="_blank">
        <div className="proj-imgbx" style={{width: '255px', height: '255px'}}>
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

export default PostCard