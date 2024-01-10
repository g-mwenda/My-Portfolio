import Javascript from "../assets/img/javascript-svgrepo-com(1).svg";
import React from "../assets/img/react-svgrepo-com.svg";
import Ruby from "../assets/img/ruby-svgrepo-com.svg";
import Rails from "../assets/img/rails-svgrepo-com.svg";
import Sinatra from "../assets/img/sinatra-svgrepo-com.svg";
import MySQL from "../assets/img/mysql-svgrepo-com.svg";
import Figma from "../assets/img/figma-svgrepo-com.svg";
import Git from "../assets/img/git-svgrepo-com.svg"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p> Here's the dazzling array of technologies I've summoned to breathe life into my projects – an Avengers team of coding languages and tools! 🚀</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={Javascript} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={React}alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={Ruby} alt="Image" />
                                <h5>Ruby</h5>
                            </div>
                            <div className="item">
                                <img src={Rails} alt="Image" />
                                <h5>Rails</h5>
                            </div>
                            <div className="item">
                                <img src={Git} alt="Image" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={Sinatra} alt="Image" />
                                <h5>Sinatra</h5>
                            </div>
                            <div className="item">
                                <img src={MySQL} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={Figma} alt="Image" />
                                <h5>Figma</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
