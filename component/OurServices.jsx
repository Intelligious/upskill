import { Rating } from "@mui/material";
import React, { useState } from "react";

const OurServices = () => {
  return (
    <>
      <div className="is_gradient-grey">
        <div className="container pb-4">
          <div className="row justify-content-center align-items-center ">
            <div className="col-12  mt-5 text-center text-md-start ">
              <h2 className="text-color_blueslate">WHAT IS FITR?</h2>
              <p class="text_regular mx-auto mt-3">
                Fitr is the <strong>elite</strong> online coaching platform used{" "}
                <strong>worldwide</strong> by coaches across various
                disciplines. Experience the <strong>all-in-one solution</strong>{" "}
                that allows you to distribute a wide range of{" "}
                <strong>online training</strong> services. Seamlessly{" "}
                <strong>automate</strong> program <strong>delivery</strong>,
                online <strong>sales</strong> and client{" "}
                <strong>management</strong>. Whether it’s a one-off program
                download, bespoke 1-2-1 coaching or larger group-based training,
                Fitr efficiently powers coaches with{" "}
                <strong>1 to 15k+ clients</strong>.
              </p>
            </div>

            <div className="col-12 col-md-4">
              <div className="card mt-4 h-100">
                <div className="card-body text-center ">
                  <h3 className="text-color_blueslate mt-5">£10 MILLION+</h3>
                  <p className="mb-5">Earnt by our coaches.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card mt-4 h-100">
                <div className="card-body text-center ">
                  <h3 className="text-color_blueslate mt-5">£10 MILLION+</h3>
                  <p className="mb-5">Earnt by our coaches.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card mt-4 h-100">
                <div className="card-body text-center ">
                  <h3 className="text-color_blueslate mt-5">£10 MILLION+</h3>
                  <p className="mb-5">Earnt by our coaches.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="card mt-4 h-100">
                <div className="card-body text-center ">
                  <h3 className="text-color_blueslate mt-5">£10 MILLION+</h3>
                  <p className="mb-5">Earnt by our coaches.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="card mt-4 h-100">
                <div className="card-body text-center ">
                  <h3 className="text-color_blueslate mt-5">£10 MILLION+</h3>
                  <p className="mb-5">Earnt by our coaches.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="card mt-4 h-100">
                <div className="card-body text-center ">
                  <h3 className="text-color_blueslate mt-5">£10 MILLION+</h3>
                  <p className="mb-5">Earnt by our coaches.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="card mt-4 h-100">
                <div className="card-body text-center ">
                  <h3 className="text-color_blueslate mt-5">£10 MILLION+</h3>
                  <p className="mb-5">Earnt by our coaches.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-4">
        <div className="row ">
          <div className="col-12 text-center  mt-5 ">
            <h2 class="text_page-heading">Platform features</h2>
            <div class="heading_small text_caps text_weight-semi-bold">
              Everything you need to run an online coaching business, and more.
            </div>
          </div>
          <div className="col-12 text-center  mt-5 ">
            <div className="card is_gradient-grey">
              <div className="card-body">
                <img
                  src="https://assets.website-files.com/63c95e508c49b5396657555d/63f7bb58d6198a41660b457f_Feature-Icon_Program.svg"
                  width="60px"
                  className="mt-5"
                />
                <h3 class="heading_regular text_caps text_weight-extra-bold mt-3">
                  Programming
                </h3>
                <h3 class="text_medium text_weight-medium">
                  Create powerful online programming for your clients.
                </h3>
                <img src="images/Screenshot_6.png" className="img-fluid" />
                <p class="text_regular mx-auto mt-3 w-75">
                  Choose from four different program types to suit your coaching
                  style. Easily manage training schedules for individuals or
                  groups, and enhance your programming with our powerful
                  features.
                </p>
                <div class="button is_black is_small mt-3 pointer">
                  Programming
                </div>
              </div>
            </div>
          </div>
          <div className="col-12  mt-5 ">
            <div className="card ">
              <div className="card-body">
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-6 col-12 mt-5">
                    <img src="images/Screenshot_5.png" className="img-fuild" />
                  </div>
                  <div className="col-md-6 col-12 text-center text-md-start mt-5">
                    <img
                      src="https://assets.website-files.com/63c95e508c49b5396657555d/63f7bb58086147fb7ebadbdc_Feature-Icon_Client-Manage.svg"
                      width="50px"
                      className="mt-5"
                    />
                    <h3 class="heading_regular text_caps text_weight-extra-bold mt-3">
                      Client Management
                    </h3>
                    <h3 class="text_medium text_weight-medium mt-2">
                      Save time managing your clients.
                    </h3>
                    <p class="text_regular mx-auto mt-3">
                      Streamline client management using the same platform you
                      use for programming. Communicate directly to individuals
                      and groups, track performances, review client stats, and
                      more.
                    </p>
                    <div class="button is_black is_small mt-3 pointer">
                      Client Management
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurServices;
