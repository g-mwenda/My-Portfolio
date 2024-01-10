import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/breathtaking-shot-of-beautiful-stones-under-turquoise-water-of-a-lake-and-hills-in-the-background_181624-12847.avif";
import projImg2 from "../assets/img/interior-view-of-operating-room_1170-2254.avif";
import projImg3 from "../assets/img/family-photobook-about-easter-easter-card-with-love_493343-29939.jpg";
import projImg4 from "../assets/img/close-up-on-clock-with-time-change_23-2149241142.jpg";
import projImg5 from "../assets/img/dream-house-pictures.jpg";
import projImg6 from "../assets/img/tuna-salad-with-vegetables-in-the-plate_140725-5555.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Weather App",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://g-mwenda.github.io/Week-4-project/",
    },
    {
      title: "Hospital App",
      description: "A mock hospital app with different levels of access or authority granted to users based on their roles within the system",
      imgUrl: projImg2,
      link:"https://github.com/g-mwenda/Tumaini-Hospital",
    },
    {
      title: "Travel Photobook",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://g-mwenda.github.io/Week-4-project/",
    },
    {
      title: "Watches Website",
      description: "Design & Development",
      imgUrl: projImg4,
      link:"#",
    },
    {
      title: "Real Estate App",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Restaurant App",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>"Introducing my collection of Web Apps - where coding meets caffeine, and error messages are just the software's way of telling you to take another coffee break. These apps are like the rebellious teenagers of the internet, breaking the norms and occasionally crashing at the most inconvenient times.
                Use at your own risk, and remember, bugs are just unexpected features!"
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Watch this space!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Watch this space too! No, seriously.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="" src={colorSharp2}></img>
    </section>
  )
}
