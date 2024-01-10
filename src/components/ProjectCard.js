import { Col } from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={4}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h3 style={{color:"#fdfcfc"}}>{title}</h3>
            <span style={{color:"#fdfcfc"}}>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
