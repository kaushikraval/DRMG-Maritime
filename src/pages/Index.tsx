import React, { useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bannerImg from "../images/banner-img.jpg";
import btnAarrow from "../images/right-arrow.svg";
import CostEffective from "../images/cost-effective.svg";
import HyperTargeted from "../images/hyper-targeted.svg";
import Design from "../images/design.svg";
import VproLogo from "../images/vpro-logo.svg";
import DwebLogo from "../images/d-web-logo.svg";
import RagionalMap from "../images/rgional-map.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { Link, useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, useGSAP);


const Index = () => {
  const location = useLocation();
const [submitted, setSubmitted] = useState(false);

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
  }, [location]);

  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  if (!form.current) return;

  emailjs
    .sendForm(
      "service_vbf5jhh",
      "template_erkdjhk",
      form.current,
      "W5d0z3rvJr88fDaJ0"
    )
    .then(
      (result) => {
        setSubmitted(true);
        form.current.reset();
        setTimeout(() => setSubmitted(false), 5000); 
      },
      (error) => {
        console.error(error.text);
        alert("Failed to send message, please try again later.");
      }
    );
};
  

  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <section className="banner_wrapper">
              <Container>
                <Row className="align-items-center">
                  <Col lg="6">
                    <div className="banner_text pr50 pr0-xl pt100">
                      <h1 className="mb50 mb30-xl">
                        <span>Flyer Advertising</span> That Works in the
                        Maritimes
                      </h1>
                      <p>Target homes across NS, NB, and PEI with DRMG</p>
                      <div className="btn_group mt50 mt30-xl">
                        <Link to="/" className="btn btn__outline">
                          Book a Free Strategy Call{" "}
                          <span>
                            <img src={btnAarrow} alt="" />
                          </span>
                        </Link>
                        <Link to="/" className="btn ml20 ml0-md">
                          See Flyer Samples
                        </Link>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="banner_img pl50 pl0-md">
                      <img src={bannerImg} alt="" />
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>

            <section className="section service_wrapper">
              <Container>
                <h2 className="section__title text-center">
                  Our <span>Services</span>
                </h2>
                <Row className="g-4">
                  <Col md="4">
                    <div className="service_box">
                      <div className="icon">
                        <img src={CostEffective} alt="" />
                      </div>
                      <h4>Cost-effective</h4>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="service_box">
                      <div className="icon">
                        <img src={HyperTargeted} alt="" />
                      </div>
                      <h4>Hyper-targeted</h4>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="service_box">
                      <div className="icon">
                        <img src={Design} alt="" />
                      </div>
                      <h4>We design too</h4>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>

            <section className="section parters_wrapper">
              <Container>
                <h2 className="section__title text-center">
                  Trusted <span>Partners</span>
                </h2>
                <Row className="g-4">
                  <Col lg="6">
                    <div className="paartners_box">
                      <div className="partners_img">
                        <img src={VproLogo} alt="" />
                      </div>
                      <div className="partners_content">
                        <h4>V-Pro Signs</h4>
                        <p>
                          For over 25 years, V-Pro Signs has been providing
                          Atlantic Canada with the highest quality signage for
                          thousands of satisfied customers throughout Atlantic
                          Canada.
                        </p>
                        <Link
                          to="https://vprosigns.ca/"
                          target="_blank"
                          className="btn btn__outline"
                        >
                          Visit Site{" "}
                          <span>
                            <img src={btnAarrow} alt="" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="paartners_box">
                      <div className="partners_img">
                        <img src={DwebLogo} alt="" />
                      </div>
                      <div className="partners_content">
                        <h4>D-Web Design</h4>
                        <p>
                          D-WEB brings together strategy, creativity, and
                          engineering. We help brands build impactful websites,
                          generate qualified leads, and dominate search
                          rankings.
                        </p>
                        <Link to="/" className="btn btn__outline">
                          Visit Site{" "}
                          <span>
                            <img src={btnAarrow} alt="" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>

            <section className="section testimonial_wrapper"
              id="testimonial"
            >
              <Container>
                <div className="title">
                  <h2 className="section__title text-center">
                    Our <span>Testimonials</span>
                  </h2>
                </div>
                <Row className="justify-content-center">
                  <Col lg="6">
                    <div className="testimonial_slider_wrapper">
                      <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        loop={true}
                        className="testimonial_slider"
                      >
                        <SwiperSlide>
                          <div className="testimonial_slide">
                            <p>"We saw 3x ROI from DRMG flyers!"</p>
                            <h6>— Halifax Plumber</h6>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="testimonial_slide">
                            <p>
                              "Their team handled everything start to finish."
                            </p>
                            <h6>— Sarah L., E-commerce Owner</h6>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>

            <section className="section ragional_wrapper">
              <Container>
                <h2 className="section__title text-center">
                  Regional <span>Coverage</span>
                </h2>
                <Row className="justify-content-center">
                  <Col md="10">
                    <div className="map_wrapper">
                      <img src={RagionalMap} alt="" />
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>

            <section className="section contact_wrapper">
              <Container>
                <Row>
                  <Col md="4">
                    <h2 className="section__title">
                      {" "}
                      <span>Let's talk</span> about your flyer goals.
                    </h2>
                  </Col>
                  <Col md="8">
                    <div className="contact_form_wrapper">
                      <form
                        ref={form}
                        onSubmit={sendEmail}
                      >
                        <Row>
                          <Col md="6">
                            <input type="text" name="name" className="form-control mb20" placeholder="Enter your name" required />
                          </Col>
                          <Col md="6">
                            <input type="email" name="email" className="form-control mb20" placeholder="Enter your email" required />
                          </Col>
                          <Col md="12">
                            <input type="tel" name="phone" className="form-control mb20" placeholder="Enter your phone number" required />
                          </Col>
                          <Col md="12">
                            <textarea name="message" className="form-control mb20" placeholder="Enter your message" required />
                          </Col>
                        </Row>
                        <div className="text-end">
                          <button className="btn btn__outline" type="submit">Request Callback <span><img src={btnAarrow} alt="" /></span></button>
                        </div>
                        {submitted && (
                          <div className="submit_message">
                            <p>Message sent successfully!</p>
                          </div>
                        )}
                      </form>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
