import React from "react";
import Slider from "react-slick";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="slick-next-icon" onClick={onClick}>
      <ArrowCircleRightIcon
        style={{
          fontSize: "30px",
          cursor: "pointer",
        }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="slick-prev-icon" onClick={onClick}>
      {" "}
      <ArrowCircleLeftIcon
        style={{
          fontSize: "30px",
          cursor: "pointer",
        }}
      />
    </div>
  );
}

const HeroSection = () => {
  const settings = {
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="is_gradient-black-reverse ">
        <div className="blue-glow-bg ">
          <div className="container " id="home">
            <div className="row ">
              <div className="col-12 text-center hero-logo fade-in-left">
                <img
                  src="https://assets.website-files.com/63c95e508c49b5396657555d/6419afc460c584577c15d2a3_Fitr%20White.svg"
                  width="160px"
                  className=""
                />
                <h2 className="mt-4">Health & Fitness Coaching Software</h2>
                <h3 className="mt-2">
                  Automate your business. Save time. Make more money.
                </h3>
                <div className="mt-5 ">
                  <a href="" target="_blank">
                    <button className="button">START YOUR TRIAL</button>
                  </a>
                </div>
                <div className="mt-3">
                  <span>
                    14 days FREE UNLIMITED access.
                    <br /> No credit card required, cancel anytime.
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-6 text-md-start text-center  mt-5 fade-in-left">
                <img
                  src="https://assets.website-files.com/63c95e508c49b5396657555d/63dcf3ee66bd6cf5913722fc_Media-%20Fitr-Powered-By-Light-Brand-White-2022.svg"
                  width="140px"
                />
              </div>
              <div className="col-12 col-md-6 text-md-end text-center mt-5 ">
                <h4 className="mt-2">
                  POWERING COACHES WITH 1 TO 15K+ CLIENTS
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="is_black ">
        <div className="container-fuild ">
          <div className="row pb-5">
            <div className="col-12 ">
              <Slider {...settings}>
                <div className="p-3">
                  <div className=" text-center mt-5 bg-white rounded mb-3 ">
                    <img
                      src="https://assets.website-files.com/63fcb24c14839028d741039e/641c61251356255a325a23c7_63dcf64d6bbe5b02c0bb6122_613b4ef30d5fcf2330e4070e_Eleiko.svg"
                      width="200px"
                      className="mx-auto"
                    />
                  </div>
                </div>
                <div className="p-3">
                  <div className=" text-center mt-5 bg-white rounded mb-3 ">
                    <img
                      src="https://assets.website-files.com/63fcb24c14839028d741039e/641c61251356255a325a23c7_63dcf64d6bbe5b02c0bb6122_613b4ef30d5fcf2330e4070e_Eleiko.svg"
                      width="200px"
                      className="mx-auto"
                    />
                  </div>
                </div>
                <div className="p-3">
                  <div className=" text-center mt-5 bg-white rounded mb-3 ">
                    <img
                      src="https://assets.website-files.com/63fcb24c14839028d741039e/641c61251356255a325a23c7_63dcf64d6bbe5b02c0bb6122_613b4ef30d5fcf2330e4070e_Eleiko.svg"
                      width="200px"
                      className="mx-auto"
                    />
                  </div>
                </div>
                <div className="p-3">
                  <div className=" text-center mt-5 bg-white rounded mb-3 ">
                    <img
                      src="https://assets.website-files.com/63fcb24c14839028d741039e/641c61251356255a325a23c7_63dcf64d6bbe5b02c0bb6122_613b4ef30d5fcf2330e4070e_Eleiko.svg"
                      width="200px"
                      className="mx-auto"
                    />
                  </div>
                </div>
                <div className="p-3">
                  <div className=" text-center mt-5 bg-white rounded mb-3 ">
                    <img
                      src="https://assets.website-files.com/63fcb24c14839028d741039e/641c61251356255a325a23c7_63dcf64d6bbe5b02c0bb6122_613b4ef30d5fcf2330e4070e_Eleiko.svg"
                      width="200px"
                      className="mx-auto"
                    />
                  </div>
                </div>
                <div className="p-3">
                  <div className=" text-center mt-5 bg-white rounded mb-3 ">
                    <img
                      src="https://assets.website-files.com/63fcb24c14839028d741039e/641c61251356255a325a23c7_63dcf64d6bbe5b02c0bb6122_613b4ef30d5fcf2330e4070e_Eleiko.svg"
                      width="200px"
                      className="mx-auto"
                    />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
