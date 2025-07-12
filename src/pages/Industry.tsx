import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useLocation } from "react-router-dom";
import industryBanner from "../images/industry-banner.webp";
import Restaurant from "../images/restaurant.jpg";
import HomeGarden from "../images/home-garden.jpg";
import Dental from "../images/dental.jpg";
import Political from "../images/political.jpg";
import OpticalClinics from "../images/optimal.jpg";
import RealEstate from "../images/real-estate.jpg";
import HealthWellness from "../images/HealthWellness.jpg";
import TargetedReach from "../images/targeted_reach.svg";
import LowerCost from "../images/lower_cost.svg";
import Trust from "../images/trust.svg";
import Grow from "../images/grow.svg";
import Relevant from "../images/relevant.svg";
import TangibleImpact from "../images/tangible_impact.svg";
import MeasurableResults from "../images/measurable-result.svg";
import Disruption from "../images/disruption.svg";
import Competition from "../images/competition.svg";
import HandShake from "../images/hand-shake.svg";
import Marketing from "../images/marketing.svg";
import soloMail1 from "../images/soloMail1.svg";
import soloMail2 from "../images/soloMail2.svg";
import soloMail3 from "../images/soloMail3.svg";
import GoogleIcon from "../images/google.svg";
import Star from "../images/star.svg";
import GraphImg from "../images/graph-img.svg";
import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const Industry = () => {
  const location = useLocation();
  const { pathname } = location;

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".industry_inner_wrapper");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4, // section should be 60% visible
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <section className="banner_wrapper inner_banner">
              <Container>
                <Row className="align-items-center">
                  <Col lg="6">
                    <div className="banner_text pr50 pr0-xl pt100">
                      <h1 className="mb50 mb30-xl">Industry We Serve</h1>
                      <p>
                        Explore our industry-specific case studies showcasing
                        successful direct mail campaigns. Don't see your
                        industry? Contact Us for tailored solutions and proven
                        strategies.
                      </p>
                      <div className="btn_group mt50 mt30-xl">
                        <Link to="/" className="btn">
                          See Flyer Samples
                        </Link>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="banner_img pl50 pl0-md">
                      <img src={industryBanner} alt="" />
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>

            <section className="section industry_main_wrapper">
              <Container>
                <Row>
                  <Col lg="2">
                    <div className="navigation_industry">
                      <ul>
                        <li>
                          <Link
                            to="#restaurants"
                            className={
                              activeSection === "restaurants" ? "active" : ""
                            }
                          >
                            Restaurants
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#HomeGarden"
                            className={
                              activeSection === "HomeGarden" ? "active" : ""
                            }
                          >
                            Home & Garden
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#DentalClinic"
                            className={
                              activeSection === "DentalClinic" ? "active" : ""
                            }
                          >
                            Dental Clinics
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#PoliticalCampaigns"
                            className={
                              activeSection === "PoliticalCampaigns"
                                ? "active"
                                : ""
                            }
                          >
                            Political Campaigns
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#OpticalClinics"
                            className={
                              activeSection === "OpticalClinics" ? "active" : ""
                            }
                          >
                            Optical Clinics
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#RealEstate"
                            className={
                              activeSection === "RealEstate" ? "active" : ""
                            }
                          >
                            Real Estate
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#HealthWellness"
                            className={
                              activeSection === "HealthWellness" ? "active" : ""
                            }
                          >
                            Health & Wellness
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg="10">
                    <div className="industry_inner_wrapper" id="restaurants">
                      <h2 className=" mb20">Restaurant</h2>
                      <div className="industry_in_box">
                        <div className="industry_first_wrap">
                          <Row className="g-4 align-items-center">
                            <Col md="3">
                              <img src={Restaurant} alt="" />
                            </Col>
                            <Col md="9">
                              <div className="industry_text">
                                <h3>
                                  <span>Restaurant</span> Marketing Made Easy
                                  with DRMG
                                </h3>
                                <p>
                                  Increase foot traffic, boost takeout orders,
                                  and stay top-of-mind with proven direct mail
                                  advertising. As Canada’s #1 Direct Mail
                                  Marketing Company, we help restaurants reach
                                  local households with high-converting print
                                  campaigns — designed, printed, and delivered
                                  for you.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="feature_wrapper pt60">
                          <div className="section__title text-center">
                            <h3>Does Direct Mail Work for Restaurants?</h3>
                            <p>
                              Yes — and it works exceptionally well. Direct mail
                              marketing for restaurants remains one of the most
                              effective ways to boost local awareness, increase
                              foot traffic, and drive takeout, delivery, and
                              dine-in orders. Some of our clients have seen an
                              1000%+ ROI!
                            </p>
                          </div>
                          <Row>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={TargetedReach} alt="" />
                                <h4>Targeted Reach</h4>
                                <p>
                                  Target local households by postal code,
                                  income, or dining habits — ideal for promos,
                                  new menus, or grand openings. Get your message
                                  directly into the hands of those most likely
                                  to visit or order.
                                </p>
                              </div>
                            </Col>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={TangibleImpact} alt="" />
                                <h4>Tangible Impact</h4>
                                <p>
                                  Direct mail cuts through digital noise — menus
                                  and coupons are seen, saved, and used. Unlike
                                  digital ads, they stay on the fridge as daily
                                  reminders.
                                </p>
                              </div>
                            </Col>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={LowerCost} alt="" />
                                <h4>Lower Cost</h4>
                                <p>
                                  Shared mail makes restaurant advertising
                                  affordable, reaching thousands at a fraction
                                  of solo mail or PPC costs. Perfect for local
                                  chains and independent restaurants alike.
                                </p>
                              </div>
                            </Col>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={MeasurableResults} alt="" />
                                <h4>Measurable Results</h4>
                                <p>
                                  Track redemptions, orders, and reservations
                                  with QR codes or discount links. Use real data
                                  from each campaign to optimize and scale
                                  smarter.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                    <div className="industry_inner_wrapper" id="HomeGarden">
                      <h2 className="mb20">Home & Garden</h2>
                      <div className="industry_in_box">
                        <div className="industry_first_wrap">
                          <Row className="g-4 align-items-center">
                            <Col md="3">
                              <img src={HomeGarden} alt="" />
                            </Col>
                            <Col md="9">
                              <div className="industry_text">
                                <h3>
                                  Direct Mail Marketing for Your{" "}
                                  <span>Home & Garden</span> Business
                                </h3>
                                <p>
                                  Promote your home & garden business with our
                                  turnkey shared direct mail options. Designed,
                                  printed, delivered - and at a fraction of the
                                  price compared to traditional direct mail.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="feature_wrapper pt60">
                          <div className="section__title text-center">
                            <h3>
                              Why Use Direct Mail for Home & Garden Marketing?
                            </h3>
                            <p>
                              While digital marketing dominates the landscape,
                              direct mail offers unique advantages for
                              businesses:
                            </p>
                          </div>
                          <Row>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={TargetedReach} alt="" />
                                <h4>Targeted Reach</h4>
                                <p>
                                  Direct mail allows you to target specific
                                  neighbourhoods, demographics, or customer
                                  segments based on postal codes, income levels,
                                  or purchase history. This ensures your message
                                  reaches the most relevant audience.
                                </p>
                              </div>
                            </Col>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={TangibleImpact} alt="" />
                                <h4>Tangible Impact</h4>
                                <p>
                                  In a world filled with fleeting online ads, a
                                  physical piece of mail stands out. It creates
                                  a tactile experience that can feel more
                                  personal and memorable than a digital message.
                                </p>
                              </div>
                            </Col>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={LowerCost} alt="" />
                                <h4>Lower Cost</h4>
                                <p>
                                  Shared mail products allow multiple
                                  advertisers to lower the cost to 1/4 of other
                                  direct mail options by sharing the costs of
                                  delivery and print by combining their ads into
                                  one magazine, envelope or wrap.
                                </p>
                              </div>
                            </Col>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={MeasurableResults} alt="" />
                                <h4>Measurable Results</h4>
                                <p>
                                  You can track the effectiveness of your direct
                                  mail campaign by including trackable elements
                                  like coupons with unique codes or QR codes
                                  that link to your website or online ordering
                                  platform.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                    <div className="industry_inner_wrapper" id="DentalClinic">
                      <h2 className="mb20">Dental Clinics</h2>
                      <div className="industry_in_box">
                        <div className="industry_first_wrap">
                          <Row className="g-4 align-items-center">
                            <Col md="3">
                              <img src={Dental} alt="" />
                            </Col>
                            <Col md="9">
                              <div className="industry_text">
                                <h3>
                                  Boost Patient Bookings with Proven Direct Mail
                                  for <span>Dentists</span>
                                </h3>
                                <p>
                                  Partner with Canada’s #1 direct mail marketing
                                  company for dentists. Grow your dental
                                  practice with custom-designed dental postcards
                                  and direct mail campaigns. Our dental direct
                                  mail services are built to increase
                                  appointments, drive local visibility, and
                                  outperform — all at a fraction of traditional
                                  marketing costs.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="feature_wrapper pt60">
                          <div className="section__title text-center">
                            <h3>
                              Marketing Challenges for Dental Practices — and
                              the Opportunities Within
                            </h3>
                            <p>
                              Dentists are navigating a rapidly shifting
                              landscape — from increased competition to changing
                              demographics and marketing fatigue. Understanding
                              these challenges is the first step toward
                              sustainable growth. The right dental marketing
                              solutions can help your practice stand out,
                              connect with patients, and thrive in today’s
                              market.
                            </p>
                          </div>
                          <Row>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={Disruption} alt="" />
                                <h4>Disruption</h4>
                                <p>
                                  Running a dental practice today is more
                                  challenging than ever — patient expectations
                                  and appointment habits have shifted. Digital
                                  ad noise keeps growing, making it harder to
                                  stand out. Direct mail offers a trusted,
                                  tangible way to reach new and returning
                                  patients.
                                </p>
                              </div>
                            </Col>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={Competition} alt="" />
                                <h4>Increased competition</h4>
                                <p>
                                  The dental space is more competitive than
                                  ever, with 16,000+ practices in Canada.
                                  Standing out takes more than referrals or a
                                  great website. Direct postcard mailings put
                                  your practice in front of local families who
                                  need you.
                                </p>
                              </div>
                            </Col>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={HandShake} alt="" />
                                <h4>Appealing to Demographics</h4>
                                <p>
                                  Every demographic — from new parents to aging
                                  populations — has unique dental needs. Your
                                  marketing must meet them where they are.
                                  Dental postcards deliver targeted messages
                                  with offers that drive bookings.
                                </p>
                              </div>
                            </Col>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={Marketing} alt="" />
                                <h4>Multiple marketing channels</h4>
                                <p>
                                  Dentists are using social media, Google Ads,
                                  and referrals to grow — but relying on one
                                  channel isn’t enough. Dental direct mail adds
                                  a high-ROI touchpoint that complements digital
                                  efforts. It keeps your practice visible,
                                  consistent, and top-of-mind locally.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="offering_second_wrapper pt60">
                          <h2 className="h3 section__title fw_600 text-center mb30">
                            Our Most Popular{" "}
                            <span>Dental Practice Solution</span>
                          </h2>
                          <Row>
                            <Col md="4">
                              <div className="offering_box">
                                <img src={soloMail1} alt="" />
                                <h4>Target Your Ideal Customer</h4>
                                <p>
                                  Leverage Canada Post, Pelmorex, Environics, or
                                  first-party data to target by building type,
                                  household income, family type, and much more.
                                </p>
                              </div>
                            </Col>
                            <Col md="4">
                              <div className="offering_box">
                                <img src={soloMail2} alt="" />
                                <h4>Multichannel Campaign Advantage</h4>
                                <p>
                                  Engage customers with the same message online
                                  and at home, in their mailbox. Consumers pay
                                  39% more attention to integrated campaigns.
                                </p>
                              </div>
                            </Col>
                            <Col md="4">
                              <div className="offering_box">
                                <img src={soloMail3} alt="" />
                                <h4>One Size Does Not Fit All</h4>
                                <p>
                                  We have postcard options and sizes for every
                                  industry, whether you are a restaurant with a
                                  menu or a landscaping company with a brochure.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                    <div
                      className="industry_inner_wrapper"
                      id="PoliticalCampaigns"
                    >
                      <h2 className="mb20">Political Campaigns</h2>
                      <div className="industry_in_box">
                        <div className="industry_first_wrap">
                          <Row className="g-4 align-items-center">
                            <Col md="3">
                              <img src={Political} alt="" />
                            </Col>
                            <Col md="9">
                              <div className="industry_text">
                                <h3>
                                  Direct Mail Marketing for{" "}
                                  <span>Political Campaigns</span>
                                </h3>
                                <p>
                                  Promote your political campaign with our
                                  turnkey shared & solo direct mail options.
                                  Designed, printed, delivered - and at a
                                  fraction of the price compared to traditional
                                  direct mail.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="feature_wrapper pt60">
                          <div className="section__title text-center">
                            <h3>
                              Why Use Direct Mail for Political Campaign
                              Marketing?
                            </h3>
                            <p>
                              Direct mail continues to offer unique benefits
                              that make it a powerful tool for reaching and
                              engaging voters in political campaigns locally,
                              provincially and Canada-wide.
                            </p>
                          </div>
                          <Row>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={Marketing} alt="" />
                                <h4>Build Awareness</h4>
                                <p>
                                  When you add direct mail to your digital
                                  campaigns, you drive 39% more attention, 10%
                                  higher brand recall and 5% greater emotional
                                  response. Politicians use direct mail
                                  throughout the year to ensure past and
                                  potential clients have a physical reminder of
                                  who they support & want to vote for.
                                </p>
                              </div>
                            </Col>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={Trust} alt="" />
                                <h4>Strengthen Trust</h4>
                                <p>
                                  57% of consumers feel more valued when brands
                                  contact them through mail. You can build trust
                                  by reinforcing your experience and featuring
                                  your successes. Politicians do this by sending
                                  direct mail items that showcase their history
                                  and track record in public service.
                                </p>
                              </div>
                            </Col>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={Grow} alt="" />
                                <h4>Grow Voter Base</h4>
                                <p>
                                  79% of Canadians save direct mail received in
                                  their mailbox, while 34% of Canadians always
                                  or sometimes display advertising mail of
                                  interest to them in their homes. Whether it’s
                                  to attend a rally or head to the voting booth,
                                  include a clear call to action and increase
                                  frequency to reinforce your campaign messages.
                                </p>
                              </div>
                            </Col>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={Relevant} alt="" />
                                <h4>Stay Relevant</h4>
                                <p>
                                  68% of Canadians say they are likely to share
                                  advertising received in their mailbox. A
                                  single direct mail piece can live well beyond
                                  the day of delivery. When people receive a
                                  relevant item in the mail, they’ll keep it,
                                  display it and even share it with others
                                  enabling your message extra extension beyond a
                                  scroll.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="offering_second_wrapper pt60">
                          <h2 className="h3 section__title fw_600 text-center mb30">
                            Our Most Popular{" "}
                            <span>Political Campaign Solution</span>
                          </h2>
                          <Row>
                            <Col md="4">
                              <div className="offering_box">
                                <img src={soloMail1} alt="" />
                                <h4>Target Your Ideal Customer</h4>
                                <p>
                                  Leverage Canada Post, Pelmorex, Environics, or
                                  first-party data to target by building type,
                                  household income, family type, and much more.
                                </p>
                              </div>
                            </Col>
                            <Col md="4">
                              <div className="offering_box">
                                <img src={soloMail2} alt="" />
                                <h4>Multichannel Campaign Advantage</h4>
                                <p>
                                  Engage customers with the same message online
                                  and at home, in their mailbox. Consumers pay
                                  39% more attention to integrated campaigns.
                                </p>
                              </div>
                            </Col>
                            <Col md="4">
                              <div className="offering_box">
                                <img src={soloMail3} alt="" />
                                <h4>One Size Does Not Fit All</h4>
                                <p>
                                  We have postcard options and sizes for every
                                  industry, whether you are a restaurant with a
                                  menu or a landscaping company with a brochure.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                    <div className="industry_inner_wrapper" id="OpticalClinics">
                      <h2 className="mb20">Optical Clinics</h2>
                      <div className="industry_in_box">
                        <div className="industry_first_wrap">
                          <Row className="g-4 align-items-center">
                            <Col md="3">
                              <img src={OpticalClinics} alt="" />
                            </Col>
                            <Col md="9">
                              <div className="industry_text">
                                <h3>
                                  Direct Mail Marketing for{" "}
                                  <span>Optometrists</span>
                                </h3>
                                <p>
                                  Promote your optometry practice with our
                                  turnkey shared & solo direct mail options.
                                  Designed, printed, delivered - and at a
                                  fraction of the price compared to traditional
                                  direct mail.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="feature_wrapper pt60">
                          <div className="section__title text-center">
                            <h3>
                              Challenges facing Optical Professionals today.
                            </h3>
                            <p>
                              Recent events had a direct impact on your
                              practice, and could change how you operate going
                              forward. As the world works through the recovery
                              phase, marketing will be a key to reconnecting
                              with clients and building your practice. You need
                              to be savvy in order to win in this new landscape
                              – and it all starts with better understanding it.
                            </p>
                          </div>
                          <Row>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={Disruption} alt="" />
                                <h4>Disruption</h4>
                                <p>
                                  Recent events have disrupted health and
                                  wellness practices, affecting both
                                  practitioners and clients. Virtual visits and
                                  shifting care models add to the challenges.
                                  Recovery offers a chance to adapt and thrive
                                  in a changing landscape.
                                </p>
                              </div>
                            </Col>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={Competition} alt="" />
                                <h4>Increased competition</h4>
                                <p>
                                  As the economy recovers, competition for new
                                  patients and clients will be as fierce as ever
                                  – likely more so. There are over 6000 optical
                                  practices in Canada...it’s a crowded market,
                                  with more practices competing for patients and
                                  clients than ever before.
                                </p>
                              </div>
                            </Col>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={HandShake} alt="" />
                                <h4>Appealing to Demographics</h4>
                                <p>
                                  Your marketing must connect with diverse
                                  audiences for different reasons. Millennials
                                  seek services for themselves, their families,
                                  or aging parents. Newcomers are also looking
                                  to build relationships with health and
                                  wellness providers.
                                </p>
                              </div>
                            </Col>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={Marketing} alt="" />
                                <h4>Multiple marketing channels</h4>
                                <p>
                                  Connecting with prospects and clients is more
                                  important—and complex—than ever. You need to
                                  know which digital and social channels drive
                                  real results. It’s also key to build lasting
                                  relationships and tap into referral networks.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="offering_second_wrapper pt60">
                          <h2 className="h3 section__title fw_600 text-center mb30">
                            Our Most Popular{" "}
                            <span>Optical Practice Solution</span>
                          </h2>
                          <Row>
                            <Col md="4">
                              <div className="offering_box">
                                <img src={soloMail1} alt="" />
                                <h4>Target Your Ideal Customer</h4>
                                <p>
                                  Leverage Canada Post, Pelmorex, Environics, or
                                  first-party data to target by building type,
                                  household income, family type, and much more.
                                </p>
                              </div>
                            </Col>
                            <Col md="4">
                              <div className="offering_box">
                                <img src={soloMail2} alt="" />
                                <h4>Multichannel Campaign Advantage</h4>
                                <p>
                                  Engage customers with the same message online
                                  and at home, in their mailbox. Consumers pay
                                  39% more attention to integrated campaigns.
                                </p>
                              </div>
                            </Col>
                            <Col md="4">
                              <div className="offering_box">
                                <img src={soloMail3} alt="" />
                                <h4>One Size Does Not Fit All</h4>
                                <p>
                                  We have postcard options and sizes for every
                                  industry, whether you are a restaurant with a
                                  menu or a landscaping company with a brochure.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                    <div className="industry_inner_wrapper" id="RealEstate">
                      <h2 className="mb20">Real Estate</h2>
                      <div className="industry_in_box">
                        <div className="industry_first_wrap">
                          <Row className="g-4 align-items-center">
                            <Col md="3">
                              <img src={RealEstate} alt="" />
                            </Col>
                            <Col md="9">
                              <div className="industry_text">
                                <h3>
                                  High-Impact Direct Mail Marketing for{" "}
                                  <span>Real Estate</span>
                                </h3>
                                <p>
                                  Marketing and real estate go hand in hand —
                                  and our targeted direct mail campaigns help
                                  real estate professionals stand out. Whether
                                  you’re looking to farm new neighborhoods or
                                  re-engage past clients, DRMG delivers turnkey
                                  direct marketing for real estate agents that’s
                                  designed, printed, and delivered at a fraction
                                  of the price.
                                </p>
                                <p>
                                  Reach more leads, sell more homes, and build a
                                  brand buyers trust — with the best direct mail
                                  company for real estate agents.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="feature_wrapper pt60">
                          <div className="section__title text-center">
                            <h3>
                              Does Direct Mail Marketing Work for Real Estate?
                            </h3>
                            <p>
                              Absolutely - and here’s why. While digital
                              channels dominate the landscape, direct mail
                              marketing for real estate agents continues to
                              deliver unmatched results for buyer and seller
                              engagement:
                            </p>
                          </div>
                          <Row>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={Marketing} alt="" />
                                <h4>Build Awareness</h4>
                                <p>
                                  Combining real estate marketing with direct
                                  mail boosts performance. Agents see 39% more
                                  attention, 10% better brand recall, and 5%
                                  higher emotional engagement. Direct mail keeps
                                  your brand visible and top-of-mind when it
                                  matters most.
                                </p>
                              </div>
                            </Col>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={Trust} alt="" />
                                <h4>Strengthen Trust</h4>
                                <p>
                                  57% of consumers feel more valued when
                                  contacted by mail. Direct marketing for real
                                  estate builds trust by showcasing local
                                  success stories, recent sales, and client wins
                                  — something digital ads struggle to replicate.
                                </p>
                              </div>
                            </Col>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={Grow} alt="" />
                                <h4>Get New Client</h4>
                                <p>
                                  79% of Canadians keep direct mail they
                                  receive, and 34% display it in their homes.
                                  With the right call to action, direct mail
                                  marketing for real estate agents becomes a
                                  direct path to open house visits, listing
                                  inquiries, and new leads.
                                </p>
                              </div>
                            </Col>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={Relevant} alt="" />
                                <h4>Drive Repeat Business</h4>
                                <p>
                                  68% of Canadians share printed advertising
                                  with friends and family. The best direct mail
                                  companies for real estate know how to create
                                  pieces that stick — driving long-term brand
                                  exposure and referrals from a single campaign.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="offering_second_wrapper pt60">
                          <h2 className="h3 section__title fw_600 text-center mb30">
                            Our Most Popular <span>Real Estate</span> Cateogry
                            Marketing Product
                          </h2>
                          <Row>
                            <Col md="4">
                              <div className="offering_box">
                                <img src={soloMail1} alt="" />
                                <h4>Target Your Ideal Customer</h4>
                                <p>
                                  Leverage Canada Post, Pelmorex, Environics, or
                                  first-party data to target by building type,
                                  household income, family type, and much more.
                                </p>
                              </div>
                            </Col>
                            <Col md="4">
                              <div className="offering_box">
                                <img src={soloMail2} alt="" />
                                <h4>Multichannel Campaign Advantage</h4>
                                <p>
                                  Engage customers with the same message online
                                  and at home, in their mailbox. Consumers pay
                                  39% more attention to integrated campaigns.
                                </p>
                              </div>
                            </Col>
                            <Col md="4">
                              <div className="offering_box">
                                <img src={soloMail3} alt="" />
                                <h4>One Size Does Not Fit All</h4>
                                <p>
                                  We have postcard options and sizes for every
                                  industry, whether you are a restaurant with a
                                  menu or a landscaping company with a brochure.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                    <div className="industry_inner_wrapper p0 m0" id="HealthWellness">
                      <h2 className="mb20">Health & Wellness</h2>
                      <div className="industry_in_box">
                        <div className="industry_first_wrap">
                          <Row className="g-4 align-items-center">
                            <Col md="3">
                              <img src={HealthWellness} alt="" />
                            </Col>
                            <Col md="9">
                              <div className="industry_text">
                                <h3>
                                  Direct Mail Marketing for{" "}
                                  <span>Health & Wellness Professionals</span>
                                </h3>
                                <p>
                                  Promote your health & wellness practice with
                                  our turnkey shared & solo direct mail options.
                                  Designed, printed, delivered - and at a
                                  fraction of the price compared to traditional
                                  direct mail.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="feature_wrapper pt60">
                          <div className="section__title text-center">
                            <h3>
                              Challenges facing Health & Wellness Professionals
                              today.
                            </h3>
                            <p>
                              Recent events had a direct impact on your
                              practice, and could change how you operate going
                              forward. As the world works through the recovery
                              phase, marketing will be a key to reconnecting
                              with clients and building your practice. You need
                              to be savvy in order to win in this new landscape
                              – and it all starts with better understanding it.
                            </p>
                          </div>
                          <Row>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={Disruption} alt="" />
                                <h4>Disruption</h4>
                                <p>
                                  Recent events have disrupted health and
                                  wellness practices, affecting both clients and
                                  providers. Virtual visits and evolving care
                                  models add new complexities. Recovery brings
                                  both challenges and opportunities for growth.
                                </p>
                              </div>
                            </Col>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={Competition} alt="" />
                                <h4>Increased competition</h4>
                                <p>
                                  As the economy recovers, competition for
                                  patients and clients is intensifying. With
                                  thousands of wellness centres and
                                  practitioners across Canada, it’s a crowded
                                  field. Standing out is more important than
                                  ever in this competitive market.
                                </p>
                              </div>
                            </Col>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={HandShake} alt="" />
                                <h4>Appealing to Demographics</h4>
                                <p>
                                  Your marketing must resonate with diverse
                                  groups, each with unique needs. Millennials
                                  seek care for themselves, their families, or
                                  aging parents, while newcomers look to build
                                  trusted provider relationships. The aging
                                  boomer population also demands a new range of
                                  services.
                                </p>
                              </div>
                            </Col>
                            <Col md="3">
                              <div className="feature_box">
                                <img src={Marketing} alt="" />
                                <h4>Multiple marketing channels</h4>
                                <p>
                                  Connecting with clients has never been more
                                  important—or more complex. You need to
                                  identify which digital and social channels
                                  drive real results. It’s also key to build
                                  loyalty and tap into referral networks
                                  effectively.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="offering_second_wrapper pt60">
                          <h2 className="h3 section__title fw_600 text-center mb30">
                            Our Most Popular{" "}
                            <span>Health & Wellness Solution</span>
                          </h2>
                          <Row>
                            <Col md="4">
                              <div className="offering_box">
                                <img src={soloMail1} alt="" />
                                <h4>Target Your Ideal Customer</h4>
                                <p>
                                  Leverage Canada Post, Pelmorex, Environics, or
                                  first-party data to target by building type,
                                  household income, family type, and much more.
                                </p>
                              </div>
                            </Col>
                            <Col md="4">
                              <div className="offering_box">
                                <img src={soloMail2} alt="" />
                                <h4>Multichannel Campaign Advantage</h4>
                                <p>
                                  Engage customers with the same message online
                                  and at home, in their mailbox. Consumers pay
                                  39% more attention to integrated campaigns.
                                </p>
                              </div>
                            </Col>
                            <Col md="4">
                              <div className="offering_box">
                                <img src={soloMail3} alt="" />
                                <h4>One Size Does Not Fit All</h4>
                                <p>
                                  We have postcard options and sizes for every
                                  industry, whether you are a restaurant with a
                                  menu or a landscaping company with a brochure.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>

            <section className="section review_wrapper bg_gray">
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

            <section className="section good_news_wrapper">
              <Container>
                <div className="good_news_inner">
                  <div className="good_news_img">
                    <img src={GraphImg} alt="" />
                  </div>
                  <div className="good_news_contentn">
                    <h6>THE GOOD NEWS</h6>
                    <p>Yes, you’re facing challenges and challenging times. But keep reading! We’ll show you how direct mail can be used, targeted and integrated with other marketing channels to help you better connect with prospects and clients that are vital to you and your bottom line.</p>
                  </div>
                </div>
              </Container>
            </section>

          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Industry;
