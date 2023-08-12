import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="slick-next-icon2" onClick={onClick}>
      <ArrowCircleRightIcon
        style={{
          fontSize: "30px",
          cursor: "pointer",
          color: "black",
        }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="slick-prev-icon2" onClick={onClick}>
      {" "}
      <ArrowCircleLeftIcon
        style={{
          fontSize: "30px",
          cursor: "pointer",
          color: "black",
        }}
      />
    </div>
  );
}
const WhyChooseUs = () => {
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container mt-5 mb-5" id="services">
        <div className="row">
          <div className="col-12  text-center  mt-5 ">
            <div className="card is_gradient-grey">
              <div className="card-body">
                <img
                  src="https://assets.website-files.com/63c95e508c49b5396657555d/63f7bb58d0264c33e2a3c7e5_Feature-Icon_Marketing.svg"
                  width="60px"
                  className="mt-5"
                />
                <h3 class="heading_regular text_caps text_weight-extra-bold mt-3">
                  Marketing
                </h3>
                <h3 class="text_medium text_weight-medium">
                  Attract sales and make more money with features designed to
                  help you grow.
                </h3>
                <img src="images/Screenshot_4.png" className="img-fuild" />
                <p class="text_regular text_weight-medium mt-3 w-75 mx-auto">
                  Utilise our built-in promotional tools that are designed to
                  help you sell. Create your own storefront, program pages and
                  coupons. Use data to guide your marketing decisions.
                </p>
                <div class="button is_black is_small mt-3 pointer">
                  Marketing
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 text-center  mt-5 ">
            <div className="card ">
              <div className="card-body">
                <img
                  src="https://assets.website-files.com/63c95e508c49b5396657555d/63f7bb57e735b5d2efc0cdd1_Feature-Icon_Business.svg"
                  width="60px"
                  className="mt-5"
                />
                <h3 class="heading_regular text_caps text_weight-extra-bold mt-3">
                  Business & Admin
                </h3>
                <h3 class="text_medium text_weight-medium">
                  Streamline the way you handle business admin.
                </h3>
                <p class="text_regular text_weight-medium mt-3">
                  Spend less time managing the day-to-day needs of your
                  business. Team up with other coaches and manage notifications
                  to help you stay on top of important actions.
                </p>
                <div class="button is_black is_small mt-3 pointer">
                  Business & Admin
                </div>
              </div>
              <img src="images/Screenshot_7.png" className="img-fuild mx-3" />
            </div>
          </div>
          <div className="col-md-6 col-12 text-center  mt-5 ">
            <div className="card ">
              <div className="card-body">
                <img
                  src="https://assets.website-files.com/63c95e508c49b5396657555d/63f7bb58b44d33753a7bfc34_Feature-Icon_Payments.svg"
                  width="60px"
                  className="mt-5"
                />
                <h3 class="heading_regular text_caps text_weight-extra-bold mt-3">
                  Payments
                </h3>
                <h3 class="text_medium text_weight-medium">
                  Automatically charge clients and receive payments to your bank
                  account.
                </h3>
                <p class="text_regular text_weight-medium mt-3">
                  Spend less time managing the day-to-day needs of your
                  business. Team up with other coaches and manage notifications
                  to help you stay on top of important actions.
                </p>
                <div class="button is_black is_small mt-3 pointer">
                  Payments
                </div>
              </div>
              <img src="images/Screenshot_7.png" className="img-fuild mx-3" />
            </div>
          </div>
          <div className="col-12  mt-5 ">
            <div className="card ">
              <div className="row justify-content-center align-items-center">
                <div className="col-md-6 col-12">
                  <img
                    src="https://assets.website-files.com/63c95e508c49b5396657555d/645129c261a703ac3426c4f5_White-Label-Training.svg"
                    width="100%"
                    height="800px"
                  />
                </div>
                <div className="col-md-6 col-12 text-center text-md-start ps-md-3 ">
                  <h3 class="heading_regular text_caps text_weight-extra-bold mt-3">
                    WHITE LABEL ‍FITNESS APP
                  </h3>
                  <h3 class="text_medium text_weight-medium">
                    YOUR BRAND. OUR ELITE COACHING SOFTWARE.
                  </h3>
                  <p class="text_regular text_weight-medium mt-3">
                    Spend less time managing the day-to-day needs of your
                    business. Team up with other coaches and manage
                    notifications to help you stay on top of important
                    actions.Add custom branding in a few simple steps to harness
                    the power of Fitr using your own unique identity.
                  </p>
                  <div class="button is_black is_small mt-3 mb-3 pointer">
                    Learn More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-12 text-center">
            <div className="card cta-card">
              <div className="card-body mt-5 mb-5">
                <h2 class="heading_regular text_caps text_weight-extra-bold color-white">
                  All features
                </h2>
                <h3 class="text_medium text_weight-medium color-white  w-md-75 mx-auto">
                  Everything you need to run an online coaching business.
                </h3>
                <p class="text_regular w-md-75 mx-auto color-white ">
                  We've developed over 60 features on our platform to power the
                  way our coaches deliver their programming, manage their
                  clients, automate their business, and handle their finances.
                </p>
                <div class="button is_white is_small mt-3">All features</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fuild pb-4 is_gradient-grey">
        <div className="row pb-5 ">
          <h2 class="heading_small text_caps text-center text_weight-extra-bold text_no-margin mt-5 mb-4">
            HEAR IT FROM OUR COACHES
          </h2>
          <Slider {...settings}>
            <div
              role="listitem"
              class="splide__slide _100 w-dyn-item p-3"
              id="splide01-slide01"
              style="margin-right: 2em; width: calc(((100% + 2em) / 1) - 2em);"
              aria-hidden="true"
            >
              <div
                style={{
                  backgroundImage: `url("https://assets.website-files.com/63fcb24c14839028d741039e/63fe03f272d28c2c3b79b23c_Mat-Frazer_banner.jpg")`,
                }}
                class="slider-medium-2 is_testimonial more-padding"
              >
                <div class="testm_content ">
                  <h2 class="heading_small text_caps text_weight-extra-bold text_no-margin color-white">
                    Mat Fraser trusts Fitr to power HWPO Training.
                  </h2>
                  <p class="landscape-hide color-white">
                    The Fitr team knows how to deliver. Their software provides
                    a place for our members to SHOW UP and WORK HARD every day.
                    With Fitr you’ll unlock a platform that allows you to GROW
                    your business whilst staying CONNECTED to your clients.
                  </p>
                  <div class="padding_x-tiny"></div>
                  <div class="padding_xx-tiny"></div>
                  <div class="is_light-grey-text">
                    <div class="text_caps text_weight-extra-bold">
                      Mat Fraser
                    </div>
                    <div class="text_caps">HWPO Training</div>
                  </div>
                </div>
                <div class="testm_overlay power-by"></div>
              </div>
            </div>
            <div
              role="listitem"
              class="splide__slide _100 w-dyn-item p-3"
              id="splide01-slide01"
              style="margin-right: 2em; width: calc(((100% + 2em) / 1) - 2em);"
              aria-hidden="true"
            >
              <div
                style={{
                  backgroundImage: `url("https://assets.website-files.com/63fcb24c14839028d741039e/63fe03f272d28c2c3b79b23c_Mat-Frazer_banner.jpg")`,
                }}
                class="slider-medium-2 is_testimonial more-padding"
              >
                <div class="testm_content ">
                  <h2 class="heading_small text_caps text_weight-extra-bold text_no-margin color-white">
                    Mat Fraser trusts Fitr to power HWPO Training.
                  </h2>
                  <p class="landscape-hide color-white">
                    The Fitr team knows how to deliver. Their software provides
                    a place for our members to SHOW UP and WORK HARD every day.
                    With Fitr you’ll unlock a platform that allows you to GROW
                    your business whilst staying CONNECTED to your clients.
                  </p>
                  <div class="padding_x-tiny"></div>
                  <div class="padding_xx-tiny"></div>
                  <div class="is_light-grey-text">
                    <div class="text_caps text_weight-extra-bold">
                      Mat Fraser
                    </div>
                    <div class="text_caps">HWPO Training</div>
                  </div>
                </div>
                <div class="testm_overlay power-by"></div>
              </div>
            </div>
            <div
              role="listitem"
              class="splide__slide _100 w-dyn-item p-3"
              id="splide01-slide01"
              style="margin-right: 2em; width: calc(((100% + 2em) / 1) - 2em);"
              aria-hidden="true"
            >
              <div
                style={{
                  backgroundImage: `url("https://assets.website-files.com/63fcb24c14839028d741039e/63fe03f272d28c2c3b79b23c_Mat-Frazer_banner.jpg")`,
                }}
                class="slider-medium-2 is_testimonial more-padding"
              >
                <div class="testm_content ">
                  <h2 class="heading_small text_caps text_weight-extra-bold text_no-margin color-white">
                    Mat Fraser trusts Fitr to power HWPO Training.
                  </h2>
                  <p class="landscape-hide color-white">
                    The Fitr team knows how to deliver. Their software provides
                    a place for our members to SHOW UP and WORK HARD every day.
                    With Fitr you’ll unlock a platform that allows you to GROW
                    your business whilst staying CONNECTED to your clients.
                  </p>
                  <div class="padding_x-tiny"></div>
                  <div class="padding_xx-tiny"></div>
                  <div class="is_light-grey-text">
                    <div class="text_caps text_weight-extra-bold">
                      Mat Fraser
                    </div>
                    <div class="text_caps">HWPO Training</div>
                  </div>
                </div>
                <div class="testm_overlay power-by"></div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="container pb-4 ">
        <div className="row justify-content-center align-items-center is_gradient-blue pt-5 pb-5 ">
          <div className="col-12 col-md-6 ps-5">
            <h2 class="heading_small text_caps text_weight-extra-bold text_no-margin color-white">
              AUTOMATE YOUR COACHING BUSINESS
            </h2>
            <p class="landscape-hide color-white mt-3">
              Our technology automates time-consuming tasks so that you can
              focus on servicing your clients and growing your business. Just
              publish your program and our platform will handle the admin side
              of things.
            </p>
            <Accordion className="mt-3 ">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className="d-flex">
                  <p className="color-blk">Automatically</p>
                  <p className="color-blk mx-2">SIGN UP CLIENTS</p>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="mt-3 ">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className="d-flex">
                  <p className="color-blk">Automatically</p>
                  <p className="color-blk mx-2">SIGN UP CLIENTS</p>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="mt-3 ">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className="d-flex">
                  <p className="color-blk">Automatically</p>
                  <p className="color-blk mx-2">SIGN UP CLIENTS</p>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img src="images/Screenshot_10.png" className="img-fuild" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
