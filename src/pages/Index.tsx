import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bannerImg from "../images/banner-img.jpg";
import btnAarrow from "../images/right-arrow.svg";
import VproLogo from "../images/vpro-logo.svg";
import DwebLogo from "../images/d-web-logo.svg";
import RagionalMap from "../images/rgional-map.jpg";
import GoogleIcon from "../images/google.svg";
import Star from "../images/star.svg";
import SharedFlyerMail from "../images/shared-flyer-mail.jpg";
import SolorMail from "../images/solo-mail.jpg";
import TakeOutMenu from "../images/takeout-menu.jpg";
import SharedFlyer1 from "../images/shared-flyer1.svg";
import SharedFlyer2 from "../images/shared-flyer2.svg";
import SharedFlyer3 from "../images/shared-flyer3.svg";
import soloMail1 from "../images/soloMail1.svg";
import soloMail2 from "../images/soloMail2.svg";
import soloMail3 from "../images/soloMail3.svg";
import Icon1 from "../images/design.svg";
import Icon2 from "../images/print.svg";
import Icon3 from "../images/deliver.svg";
import Icon4 from "../images/track.svg";
import Logo1 from "../images/logo1.webp";
import Logo2 from "../images/logo2.webp";
import Logo3 from "../images/logo3.webp";
import Logo4 from "../images/logo4.webp";
import Logo5 from "../images/logo5.webp";
import Logo6 from "../images/logo6.svg";
import Logo7 from "../images/logo7.webp";
import Logo8 from "../images/logo8.webp";
import Logo9 from "../images/logo9.webp";
import Logo10 from "../images/logo10.webp";
import Logo11 from "../images/logo11.webp";
import Logo12 from "../images/logo12.webp";
import Logo13 from "../images/logo13.webp";
import Logo14 from "../images/logo14.webp";
import Logo15 from "../images/logo15.webp";
import Logo16 from "../images/logo16.webp";
import Logo17 from "../images/logo17.webp";
import Logo18 from "../images/logo18.webp";
import Logo19 from "../images/logo19.webp";
import Logo20 from "../images/logo20.webp";
import Logo21 from "../images/logo21.webp";
import Logo22 from "../images/logo22.webp";
import Logo23 from "../images/logo23.webp";
import Logo24 from "../images/logo24.webp";
import Logo25 from "../images/logo25.webp";
import Logo26 from "../images/logo26.webp";
import Logo27 from "../images/logo27.webp";
import Logo28 from "../images/logo28.webp";


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { Link, useLocation } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, useGSAP);

const Index = () => {

   const location = useLocation();

   useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      const el = document.getElementById(id);
      if (el) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 80;
        const top = el.offsetTop - headerHeight;

        setTimeout(() => {
          window.scrollTo({ top, behavior: 'smooth' });
        }, 100); // wait for layout
      }
    }
  }, [location]);

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
  }, [location]);

  

  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <section className="banner_wrapper" id="hero">
              <Container>
                <Row className="align-items-center">
                  <Col lg="6">
                    <div className="banner_text pr50 pr0-xl pt100 pt150-md">
                      <h1 className="mb50 mb30-xl">
                        <span>Flyer Advertising</span> That Works in the
                        Maritimes
                      </h1>
                      <p>
                        Target homes across Nova Scotia, New Brunswick,
                        Newfoundland and Labrador and Prince Edward Island with
                        DRMG
                      </p>
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

            <section className="section review_wrapper">
              <Container>
                <h2 className="section__title text-center">
                  We help <span>businesses grow</span>, <br />
                  Neighborhoods thrive and consumers save.
                </h2>
                <div className="review_slider_wrapper">
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}

                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      640: {
                        slidesPerView: 2,
                      },
                      991: {
                        slidesPerView: 3,
                      },
                      1367: {
                        slidesPerView: 4,
                      },
                    }}
                    modules={[Navigation, Autoplay]}
                    className="reviewSlider"
                  >
                    <SwiperSlide>
                      <div className="review_box_wrapper">
                        <div className="review_head d-flex align-items-center flex-wrap">
                          <div className="user_info d-flex align-items-center">
                            <div className="user_img">
                              <span>A</span>
                            </div>
                            <div className="user_text">
                              <h6>Alexandre Soulodre</h6>
                              <p>1 year ago</p>
                            </div>
                          </div>
                          <div className="company_img">
                            <img src={GoogleIcon} alt="" />
                          </div>
                        </div>
                        <p>Professionals that get your request done fast, effectively with great suggestions! Been using their service to distribute flyers all over Canada, recommended 👍</p>
                        <div className="rating-star">
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="review_box_wrapper">
                        <div className="review_head d-flex align-items-center flex-wrap">
                          <div className="user_info d-flex align-items-center">
                            <div className="user_img">
                              <span>A</span>
                            </div>
                            <div className="user_text">
                              <h6>Alexandre Soulodre</h6>
                              <p>1 year ago</p>
                            </div>
                          </div>
                          <div className="company_img">
                            <img src={GoogleIcon} alt="" />
                          </div>
                        </div>
                        <p>Professionals that get your request done fast, effectively with great suggestions! Been using their service to distribute flyers all over Canada, recommended 👍</p>
                        <div className="rating-star">
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="review_box_wrapper">
                        <div className="review_head d-flex align-items-center flex-wrap">
                          <div className="user_info d-flex align-items-center">
                            <div className="user_img">
                              <span>A</span>
                            </div>
                            <div className="user_text">
                              <h6>Alexandre Soulodre</h6>
                              <p>1 year ago</p>
                            </div>
                          </div>
                          <div className="company_img">
                            <img src={GoogleIcon} alt="" />
                          </div>
                        </div>
                        <p>Professionals that get your request done fast, effectively with great suggestions! Been using their service to distribute flyers all over Canada, recommended 👍</p>
                        <div className="rating-star">
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="review_box_wrapper">
                        <div className="review_head d-flex align-items-center flex-wrap">
                          <div className="user_info d-flex align-items-center">
                            <div className="user_img">
                              <span>A</span>
                            </div>
                            <div className="user_text">
                              <h6>Alexandre Soulodre</h6>
                              <p>1 year ago</p>
                            </div>
                          </div>
                          <div className="company_img">
                            <img src={GoogleIcon} alt="" />
                          </div>
                        </div>
                        <p>Professionals that get your request done fast, effectively with great suggestions! Been using their service to distribute flyers all over Canada, recommended 👍</p>
                        <div className="rating-star">
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="review_box_wrapper">
                        <div className="review_head d-flex align-items-center flex-wrap">
                          <div className="user_info d-flex align-items-center">
                            <div className="user_img">
                              <span>A</span>
                            </div>
                            <div className="user_text">
                              <h6>Alexandre Soulodre</h6>
                              <p>1 year ago</p>
                            </div>
                          </div>
                          <div className="company_img">
                            <img src={GoogleIcon} alt="" />
                          </div>
                        </div>
                        <p>Professionals that get your request done fast, effectively with great suggestions! Been using their service to distribute flyers all over Canada, recommended 👍</p>
                        <div className="rating-star">
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Container>
            </section>

            <section className="section offering_wrapper bg_gray" id="offering">
              <Container>
                <div className="offering_title">
                  <h2 className="section__title text-center">
                    Our <span>Offerings</span>
                  </h2>
                  <h4>Cost Effective Print and Distribution</h4>
                  <p>Other inclusive services: Design, Tracking Options, PT Report, Boxing, Bundling, Shipping and much more.</p>
                </div>
                <div className="offering_slider_wrapper">
                   <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    navigation={true}
                    modules={[Navigation]}
                    className="offering_slider"
                    autoHeight={true}
                  >
                    <SwiperSlide>
                      <Row className="align-items-center g-4">
                        <Col lg="5">
                          <div className="offering_img">
                            <img src={SharedFlyerMail} alt="" />
                          </div>
                        </Col>
                        <Col lg="7">
                          <div className="offering_content_wrapper">
                            <h2>Shared Flyer Mail</h2>
                            <p>Canada’s most trusted and recognized shared direct mail envelope for monthly coupon advertising, menus, catalogues and more!</p>
                            <div className="offering_second_wrapper">
                              <h2 className="h3 section__title">Why <span>Shared Flyer Mail?</span></h2>
                              <Row className="g-3">
                                <Col md="4">
                                  <div className="offering_box">
                                    <img src={SharedFlyer1} alt="" />
                                    <div className="offering_content_tezt">
                                    <h4>Share Costs Through Co-Op Mail</h4>
                                    <p>Expand your reach and target customers locally or nationally at a fraction of the cost of other mediums.</p>
                                    </div>
                                  </div>
                                </Col>
                                <Col md="4">
                                  <div className="offering_box">
                                    <img src={SharedFlyer2} alt="" />
                                    <div className="offering_content_tezt">
                                    <h4>One Size Does Not Fit All</h4>
                                    <p>Expand your reach and target customers locally or nationally at a fraction of the cost of other mediums.</p>
                                  </div>
                                  </div>
                                </Col>
                                <Col md="4">
                                  <div className="offering_box">
                                    <img src={SharedFlyer3} alt="" />
                                    <div className="offering_content_tezt">
                                    <h4>Increase Response Through Multichannel Campaigns</h4>
                                    <p>Expand your reach and target customers locally or nationally at a fraction of the cost of other mediums.</p>
                                  </div>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Row className="align-items-center g-4">
                        <Col lg="5">
                          <div className="offering_img">
                            <img src={SolorMail} alt="" />
                          </div>
                        </Col>
                        <Col lg="7">
                          <div className="offering_content_wrapper">
                            <h2>Stand out in the mailbox with DRMG Solo Direct Mail</h2>
                            <p>Make the greatest impact with a standalone advertisement & brand exclusivity.</p>
                            <div className="offering_second_wrapper">
                              <h2 className="h3 section__title">Why <span>Solo Direct Mail?</span></h2>
                              <Row className="g-3">
                                <Col md="4">
                                  <div className="offering_box">
                                    <img src={soloMail1} alt="" />
                                    <div className="offering_content_tezt">
                                    <h4>Target Your Ideal Customer</h4>
                                    <p>Leverage Canada Post, Pelmorex, Environics, or first-party data to target by building type, household income, family type, and much more.</p>
                                  </div>
                                  </div>
                                </Col>
                                <Col md="4">
                                  <div className="offering_box">
                                    <img src={soloMail2} alt="" />
                                    <div className="offering_content_tezt">
                                    <h4>Multichannel Campaign Advantage</h4>
                                    <p>Engage customers with the same message online and at home, in their mailbox. Consumers pay 39% more attention to integrated campaigns.</p>
                                  </div>
                                  </div>
                                </Col>
                                <Col md="4">
                                  <div className="offering_box">
                                    <img src={soloMail3} alt="" />
                                    <div className="offering_content_tezt">
                                    <h4>One Size Does Not Fit All</h4>
                                    <p>We have postcard options and sizes for every industry, whether you are a restaurant with a menu or a landscaping company with a brochure.</p>
                                  </div>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Row className="align-items-center g-4">
                        <Col lg="5">
                          <div className="offering_img">
                            <img src={TakeOutMenu} alt="" />
                          </div>
                        </Col>
                        <Col lg="7">
                          <div className="offering_content_wrapper">
                            <h2>Take-out Menus</h2>
                            <p>Make the greatest impact with a standalone advertisement & brand exclusivity.</p>
                            <div className="offering_second_wrapper">
                              <h2 className="h3 section__title">Why <span>Take-out Menus?</span></h2>
                              <Row className="g-3">
                                <Col md="4">
                                  <div className="offering_box">
                                    <img src={soloMail1} alt="" />
                                    <div className="offering_content_tezt">
                                    <h4>Target Your Ideal Customer</h4>
                                    <p>Leverage Canada Post, Pelmorex, Environics, or first-party data to target by building type, household income, family type, and much more.</p>
                                  </div>
                                  </div>
                                </Col>
                                <Col md="4">
                                  <div className="offering_box">
                                    <img src={soloMail2} alt="" />
                                    <div className="offering_content_tezt">
                                    <h4>Multichannel Campaign Advantage</h4>
                                    <p>Engage customers with the same message online and at home, in their mailbox. Consumers pay 39% more attention to integrated campaigns.</p>
                                  </div>
                                  </div>
                                </Col>
                                <Col md="4">
                                  <div className="offering_box">
                                    <img src={soloMail3} alt="" />
                                    <div className="offering_content_tezt">
                                    <h4>One Size Does Not Fit All</h4>
                                    <p>We have postcard options and sizes for every industry, whether you are a restaurant with a menu or a landscaping company with a brochure.</p>
                                  </div>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="offering_bottom_wrapper mt40">
                  <Row className="g-4">
                    <Col lg="3" sm="6">
                      <div className="work_box_wrapper">
                        <div className="icon">
                          <img src={Icon1} alt="" />
                        </div>
                        <div className="content_in">
                          <h4>We Design</h4>
                        </div>
                      </div>
                    </Col>
                    <Col  lg="3" sm="6">
                      <div className="work_box_wrapper">
                        <div className="icon">
                          <img src={Icon2} alt="" />
                        </div>
                        <div className="content_in">
                          <h4>We Print</h4>
                        </div>
                      </div>
                    </Col>
                    <Col  lg="3" sm="6">
                      <div className="work_box_wrapper">
                        <div className="icon">
                          <img src={Icon3} alt="" />
                        </div>
                        <div className="content_in">
                          <h4>We Deliver</h4>
                        </div>
                      </div>
                    </Col>
                    <Col  lg="3" sm="6">
                      <div className="work_box_wrapper">
                        <div className="icon">
                          <img src={Icon4} alt="" />
                        </div>
                        <div className="content_in">
                          <h4>We Track</h4>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
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

            <section className="section client_logo_wrapper bg_gray">
              <Container>
                <div className="offering_title">
                  <h2 className="section__title text-center">
                    When it comes to <span>Direct Mail</span>, there's no comparison. 
                  </h2>
                  <h4>See why over 15,000 businesses trust DRMG.</h4>
                </div>
                <Row className="g-3">
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo1} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo2} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo3} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo4} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo5} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo6} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo7} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo8} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo9} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo10} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo11} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo12} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo13} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo14} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo15} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo16} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo17} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo18} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo19} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo20} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo21} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo22} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo23} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo24} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo25} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo26} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo27} alt="" />
                    </div>
                  </Col>
                  <Col lg="2" md="3" sm="4" xs="6">
                    <div className="logo_box">
                      <img src={Logo28} alt="" />
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

            
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
