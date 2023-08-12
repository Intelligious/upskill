import React, { useEffect, useState } from "react";

const About = () => {
  return (
    <>
      <div className="container mt-5" id="aboutus">
        <div className="row">
          <div className="col-12">
            <h2
              class="text_weight-extra-bold text_caps text_no-margin"
              style={{
                color: "#000",
              }}
            >
              Account options
            </h2>
            <p class="text_regular ">
              At the end of your 14 day free trial, choose from the following
              account options.
            </p>
          </div>
          <div class="pricing_card-line tablet-hide mb-5"></div>
          <div className="col-md-4 col-12 mb-5">
            <div className="pricing_card starter">
              <div className="pricing-header-wrap">
                <h2 className="pricing_plan-name-head color-blk">Starter</h2>
                <div className="price-wrapper currency-content pricing_new-design">
                  <div className="w-dyn-list">
                    <div
                      role="list"
                      className="currency-list w-dyn-items color-blk"
                    >
                      <div role="listitem" className="w-dyn-item">
                        <div
                          className="gbp-pricing mb-3"
                          style={{ opacity: 1, fontSize: "20px" }}
                        >
                          <div className="price-box centre">
                            <div>£24.99 / month</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pricing_card-line " />
              <div className="pricing_inclusions">
                <div className="_24-space" />
                <div className="pricing_inclusions-entry">
                  <img
                    src="https://assets.website-files.com/63c95e508c49b5396657555d/63dcf4fdb8eaaf61cc577c57_Fitr-Pricing-Tick-Green.svg"
                    loading="lazy"
                    alt="Fitr Circle Green Tick "
                    className="pricing_inclusion-icon"
                  />
                  <div className="pricing_inclusions-text color-blk">
                    <div>5 x Active Clients</div>
                    <div className="text-opacity">
                      Excludes Fixed Length program clients
                    </div>
                  </div>
                  <div
                    data-tippy-content="An active client is counted when a client subscribes to a monthly ongoing program."
                    className="pricing_help-icon"
                    tabIndex={0}
                  />
                </div>
                <div className="pricing_inclusions-entry">
                  <img
                    src="https://assets.website-files.com/63c95e508c49b5396657555d/63dcf4fdb8eaaf61cc577c57_Fitr-Pricing-Tick-Green.svg"
                    loading="lazy"
                    alt="Fitr Circle Green Tick "
                    className="pricing_inclusion-icon"
                  />
                  <div className="pricing_inclusions-text color-blk">
                    <div>Unlimited One-off Downloads</div>
                  </div>
                  <div
                    data-tippy-content="Fixed length programs that are downloaded by clients rather than being subscribed to over time. We don’t limit how many of these you sell or give away for free."
                    className="pricing_help-icon"
                    tabIndex={0}
                  />
                </div>
                <div className="pricing_inclusions-entry">
                  <img
                    src="https://assets.website-files.com/63c95e508c49b5396657555d/63dcf4fdb8eaaf61cc577c57_Fitr-Pricing-Tick-Green.svg"
                    loading="lazy"
                    alt="Fitr Circle Green Tick "
                    className="pricing_inclusion-icon"
                  />
                  <div className="pricing_inclusions-text color-blk">
                    <div>Unlimited Programs</div>
                  </div>
                  <div
                    data-tippy-content="Use our program builder to create your online training programs in a variety of formats such as one-off downloads, bespoke or group based training."
                    className="pricing_help-icon"
                    tabIndex={0}
                  />
                </div>
                <div className="pricing_inclusions-entry">
                  <img
                    src="https://assets.website-files.com/5f070a0b7e0842b01337cbfc/639a09eca43d788a91093ab8_Fitr-Pricing-Tick-Green.svg"
                    loading="lazy"
                    alt=""
                    className="pricing_inclusion-icon"
                  />
                  <div className="pricing_inclusions-text color-blk">
                    <div>Integrated Payments</div>
                  </div>
                  <div
                    data-tippy-content="Sell your programs for free, at a fixed price, or offer them on an ongoing subscription basis. Integrate with Stripe to receive the earnings directly into your bank account."
                    className="pricing_help-icon"
                    tabIndex={0}
                  />
                </div>
                <div className="pricing_inclusions-entry color-blk">
                  <img
                    src="https://assets.website-files.com/63c95e508c49b5396657555d/640f415d70ade71a39b6eeba_Fitr-Pricing-Icon-Cross-Red.svg"
                    loading="lazy"
                    alt="Red Close cross icon"
                    className="pricing_inclusion-icon"
                  />
                  <div className="pricing_inclusions-text color-blk">
                    <div className="text-opacity">Add Coaches</div>
                  </div>
                </div>
                <div className="pricing_inclusions-entry">
                  <img
                    src="https://assets.website-files.com/63c95e508c49b5396657555d/640f415d70ade71a39b6eeba_Fitr-Pricing-Icon-Cross-Red.svg"
                    loading="lazy"
                    alt="Red Close cross icon"
                    className="pricing_inclusion-icon"
                  />
                  <div className="pricing_inclusions-text color-blk">
                    <div className="text-opacity">White Label</div>
                  </div>
                </div>
                <div className="pricing_inclusions-entry">
                  <img
                    src="https://assets.website-files.com/63c95e508c49b5396657555d/640f415d70ade71a39b6eeba_Fitr-Pricing-Icon-Cross-Red.svg"
                    loading="lazy"
                    alt="Red Close cross icon"
                    className="pricing_inclusion-icon"
                  />
                  <div className="pricing_inclusions-text color-blk">
                    <div className="text-opacity">Zapier integration</div>
                  </div>
                </div>
              </div>
              <div className="pricing_card-tag grey">Entry level</div>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-5">
            <div className="pricing_card starter">
              <div className="pricing-header-wrap">
                <h2 className="pricing_plan-name-head color-blk">Starter</h2>
                <div className="price-wrapper currency-content pricing_new-design">
                  <div className="w-dyn-list">
                    <div
                      role="list"
                      className="currency-list w-dyn-items color-blk"
                    >
                      <div role="listitem" className="w-dyn-item">
                        <div
                          className="gbp-pricing mb-3"
                          style={{ opacity: 1, fontSize: "20px" }}
                        >
                          <div className="price-box centre">
                            <div>£24.99 / month</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pricing_card-line " />
              <div className="pricing_inclusions">
                <div className="_24-space" />
                <div className="pricing_inclusions-entry">
                  <img
                    src="https://assets.website-files.com/63c95e508c49b5396657555d/63dcf4fdb8eaaf61cc577c57_Fitr-Pricing-Tick-Green.svg"
                    loading="lazy"
                    alt="Fitr Circle Green Tick "
                    className="pricing_inclusion-icon"
                  />
                  <div className="pricing_inclusions-text color-blk">
                    <div>5 x Active Clients</div>
                    <div className="text-opacity">
                      Excludes Fixed Length program clients
                    </div>
                  </div>
                  <div
                    data-tippy-content="An active client is counted when a client subscribes to a monthly ongoing program."
                    className="pricing_help-icon"
                    tabIndex={0}
                  />
                </div>
                <div className="pricing_inclusions-entry">
                  <img
                    src="https://assets.website-files.com/63c95e508c49b5396657555d/63dcf4fdb8eaaf61cc577c57_Fitr-Pricing-Tick-Green.svg"
                    loading="lazy"
                    alt="Fitr Circle Green Tick "
                    className="pricing_inclusion-icon"
                  />
                  <div className="pricing_inclusions-text color-blk">
                    <div>Unlimited One-off Downloads</div>
                  </div>
                  <div
                    data-tippy-content="Fixed length programs that are downloaded by clients rather than being subscribed to over time. We don’t limit how many of these you sell or give away for free."
                    className="pricing_help-icon"
                    tabIndex={0}
                  />
                </div>
                <div className="pricing_inclusions-entry">
                  <img
                    src="https://assets.website-files.com/63c95e508c49b5396657555d/63dcf4fdb8eaaf61cc577c57_Fitr-Pricing-Tick-Green.svg"
                    loading="lazy"
                    alt="Fitr Circle Green Tick "
                    className="pricing_inclusion-icon"
                  />
                  <div className="pricing_inclusions-text color-blk">
                    <div>Unlimited Programs</div>
                  </div>
                  <div
                    data-tippy-content="Use our program builder to create your online training programs in a variety of formats such as one-off downloads, bespoke or group based training."
                    className="pricing_help-icon"
                    tabIndex={0}
                  />
                </div>
                <div className="pricing_inclusions-entry">
                  <img
                    src="https://assets.website-files.com/5f070a0b7e0842b01337cbfc/639a09eca43d788a91093ab8_Fitr-Pricing-Tick-Green.svg"
                    loading="lazy"
                    alt=""
                    className="pricing_inclusion-icon"
                  />
                  <div className="pricing_inclusions-text color-blk">
                    <div>Integrated Payments</div>
                  </div>
                  <div
                    data-tippy-content="Sell your programs for free, at a fixed price, or offer them on an ongoing subscription basis. Integrate with Stripe to receive the earnings directly into your bank account."
                    className="pricing_help-icon"
                    tabIndex={0}
                  />
                </div>
                <div className="pricing_inclusions-entry color-blk">
                  <img
                    src="https://assets.website-files.com/63c95e508c49b5396657555d/640f415d70ade71a39b6eeba_Fitr-Pricing-Icon-Cross-Red.svg"
                    loading="lazy"
                    alt="Red Close cross icon"
                    className="pricing_inclusion-icon"
                  />
                  <div className="pricing_inclusions-text color-blk">
                    <div className="text-opacity">Add Coaches</div>
                  </div>
                </div>
                <div className="pricing_inclusions-entry">
                  <img
                    src="https://assets.website-files.com/63c95e508c49b5396657555d/640f415d70ade71a39b6eeba_Fitr-Pricing-Icon-Cross-Red.svg"
                    loading="lazy"
                    alt="Red Close cross icon"
                    className="pricing_inclusion-icon"
                  />
                  <div className="pricing_inclusions-text color-blk">
                    <div className="text-opacity">White Label</div>
                  </div>
                </div>
                <div className="pricing_inclusions-entry">
                  <img
                    src="https://assets.website-files.com/63c95e508c49b5396657555d/640f415d70ade71a39b6eeba_Fitr-Pricing-Icon-Cross-Red.svg"
                    loading="lazy"
                    alt="Red Close cross icon"
                    className="pricing_inclusion-icon"
                  />
                  <div className="pricing_inclusions-text color-blk">
                    <div className="text-opacity">Zapier integration</div>
                  </div>
                </div>
              </div>
              <div className="pricing_card-tag grey">Entry level</div>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-5">
            <div className="pricing_card starter">
              <div className="pricing-header-wrap">
                <h2 className="pricing_plan-name-head color-blk">Starter</h2>
                <div className="price-wrapper currency-content pricing_new-design">
                  <div className="w-dyn-list">
                    <div
                      role="list"
                      className="currency-list w-dyn-items color-blk"
                    >
                      <div role="listitem" className="w-dyn-item">
                        <div
                          className="gbp-pricing mb-3"
                          style={{ opacity: 1, fontSize: "20px" }}
                        >
                          <div className="price-box centre">
                            <div>£24.99 / month</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pricing_card-line " />
              <div className="pricing_inclusions">
                <div className="_24-space" />
                <div className="pricing_inclusions-entry">
                  <img
                    src="https://assets.website-files.com/63c95e508c49b5396657555d/63dcf4fdb8eaaf61cc577c57_Fitr-Pricing-Tick-Green.svg"
                    loading="lazy"
                    alt="Fitr Circle Green Tick "
                    className="pricing_inclusion-icon"
                  />
                  <div className="pricing_inclusions-text color-blk">
                    <div>5 x Active Clients</div>
                    <div className="text-opacity">
                      Excludes Fixed Length program clients
                    </div>
                  </div>
                  <div
                    data-tippy-content="An active client is counted when a client subscribes to a monthly ongoing program."
                    className="pricing_help-icon"
                    tabIndex={0}
                  />
                </div>
                <div className="pricing_inclusions-entry">
                  <img
                    src="https://assets.website-files.com/63c95e508c49b5396657555d/63dcf4fdb8eaaf61cc577c57_Fitr-Pricing-Tick-Green.svg"
                    loading="lazy"
                    alt="Fitr Circle Green Tick "
                    className="pricing_inclusion-icon"
                  />
                  <div className="pricing_inclusions-text color-blk">
                    <div>Unlimited One-off Downloads</div>
                  </div>
                  <div
                    data-tippy-content="Fixed length programs that are downloaded by clients rather than being subscribed to over time. We don’t limit how many of these you sell or give away for free."
                    className="pricing_help-icon"
                    tabIndex={0}
                  />
                </div>
                <div className="pricing_inclusions-entry">
                  <img
                    src="https://assets.website-files.com/63c95e508c49b5396657555d/63dcf4fdb8eaaf61cc577c57_Fitr-Pricing-Tick-Green.svg"
                    loading="lazy"
                    alt="Fitr Circle Green Tick "
                    className="pricing_inclusion-icon"
                  />
                  <div className="pricing_inclusions-text color-blk">
                    <div>Unlimited Programs</div>
                  </div>
                  <div
                    data-tippy-content="Use our program builder to create your online training programs in a variety of formats such as one-off downloads, bespoke or group based training."
                    className="pricing_help-icon"
                    tabIndex={0}
                  />
                </div>
                <div className="pricing_inclusions-entry">
                  <img
                    src="https://assets.website-files.com/5f070a0b7e0842b01337cbfc/639a09eca43d788a91093ab8_Fitr-Pricing-Tick-Green.svg"
                    loading="lazy"
                    alt=""
                    className="pricing_inclusion-icon"
                  />
                  <div className="pricing_inclusions-text color-blk">
                    <div>Integrated Payments</div>
                  </div>
                  <div
                    data-tippy-content="Sell your programs for free, at a fixed price, or offer them on an ongoing subscription basis. Integrate with Stripe to receive the earnings directly into your bank account."
                    className="pricing_help-icon"
                    tabIndex={0}
                  />
                </div>
                <div className="pricing_inclusions-entry color-blk">
                  <img
                    src="https://assets.website-files.com/63c95e508c49b5396657555d/640f415d70ade71a39b6eeba_Fitr-Pricing-Icon-Cross-Red.svg"
                    loading="lazy"
                    alt="Red Close cross icon"
                    className="pricing_inclusion-icon"
                  />
                  <div className="pricing_inclusions-text color-blk">
                    <div className="text-opacity">Add Coaches</div>
                  </div>
                </div>
                <div className="pricing_inclusions-entry">
                  <img
                    src="https://assets.website-files.com/63c95e508c49b5396657555d/640f415d70ade71a39b6eeba_Fitr-Pricing-Icon-Cross-Red.svg"
                    loading="lazy"
                    alt="Red Close cross icon"
                    className="pricing_inclusion-icon"
                  />
                  <div className="pricing_inclusions-text color-blk">
                    <div className="text-opacity">White Label</div>
                  </div>
                </div>
                <div className="pricing_inclusions-entry">
                  <img
                    src="https://assets.website-files.com/63c95e508c49b5396657555d/640f415d70ade71a39b6eeba_Fitr-Pricing-Icon-Cross-Red.svg"
                    loading="lazy"
                    alt="Red Close cross icon"
                    className="pricing_inclusion-icon"
                  />
                  <div className="pricing_inclusions-text color-blk">
                    <div className="text-opacity">Zapier integration</div>
                  </div>
                </div>
              </div>
              <div className="pricing_card-tag grey">Entry level</div>
            </div>
          </div>
          <div className="col-12 text-center mb-5">
            <div className="mt-5 ">
              <a href="" target="_blank">
                <button className="button ">START YOUR TRIAL</button>
              </a>
            </div>
            <div className="mt-3">
              <span className="color-blk">
                14 days FREE UNLIMITED access.
                <br /> No credit card required, cancel anytime.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="is_dark-grey">
        <div className="container  mt-5">
          <div className="row">
            <div className="card is_black split-mobile-bg  mb-5">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 col-12 mt-3 mt-md-0">
                    <img
                      src="https://assets.website-files.com/63c95e508c49b5396657555d/646b2f172bb254ea3acdce3a_Client_XP-Screen.png"
                      className="img-fuild "
                    />
                  </div>
                  <div className="col-md-4 col-12 mt-3 mt-md-0 text-center mx-auto">
                    <h2 class="heading_regular text_caps text_weight-extra-bold color-white mt-5">
                      DEDICATED APPS FOR COACHES AND CLIENTS
                    </h2>
                    <p class="text_regular color-white">
                      We’ve built two separate apps for coaches and clients.
                      Both apps are available for free, and you can even
                      customise the client app with a{" "}
                      <a
                        href="/white-label"
                        class="text_link-inline is_white-text"
                      >
                        White Label
                      </a>{" "}
                      subscription. Learn more using the links below.
                    </p>
                    <div class="mt-3">
                      <div class="button is_white is_small margin pointer">
                        Coach App
                      </div>
                    </div>
                    <div class="mt-3">
                      <div class="button is_white is_small margin pointer">
                        Client App
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-12 mt-3 mt-md-0">
                    <img
                      src="https://assets.website-files.com/63c95e508c49b5396657555d/6410b1ea3bcdb7c23c3bce80_Header-Phone-White-Full.png"
                      className="img-fuild  "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="cta-card mt-4 mb-5 ">
              <div className="text_align-centre ">
                <h2 className="heading_regular text_weight-medium color-white mb-4">
                  Sign up today for free
                </h2>
                <div className="cta_green-content ">
                  <div className="padding_x-tiny" />
                  <a
                    id="dark-button-cta"
                    target="_blank"
                    className="button is_black mb-3"
                  >
                    Start your trial
                  </a>
                  <div className="padding_x-tiny" />
                  <div>
                    <div className="text_tiny text_weight-medium">
                      14 days FREE UNLIMITED access.
                      <br />
                      No credit card required, cancel anytime.
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

export default About;
