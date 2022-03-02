import React from "react";
import Header from "../component/Header";
import NewsSection from "../component/NewsSection";
import Footer from "../component/Footer";
import SubscribeSection from "../component/SubscribeSection";
import about_bg from "../assets/about_bg.png";
import founder_pic from "../assets/founder_pic.png";
import user from "../assets/user.png";

function TestimonialCard() {
  return (
    <div className="testnomials__main__section__content__card">
      <div className="testnomials__main__section__content__card__img__wrapper">
        <img
          src={user}
          alt="user"
          className="testnomials__main__section__content__card__img"
        />
      </div>
      <div className="testnomials__main__section__content__card__para">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31.2"
          height="27.3"
          viewBox="0 0 31.2 27.3"
        >
          <path
            id="Icon_awesome-quote-left"
            data-name="Icon awesome-quote-left"
            d="M28.275,15.9H23.4V12a3.9,3.9,0,0,1,3.9-3.9h.487A1.459,1.459,0,0,0,29.25,6.638V3.713A1.459,1.459,0,0,0,27.787,2.25H27.3A9.747,9.747,0,0,0,17.55,12V26.625a2.926,2.926,0,0,0,2.925,2.925h7.8A2.926,2.926,0,0,0,31.2,26.625v-7.8A2.926,2.926,0,0,0,28.275,15.9Zm-17.55,0H5.85V12a3.9,3.9,0,0,1,3.9-3.9h.487A1.459,1.459,0,0,0,11.7,6.638V3.713A1.459,1.459,0,0,0,10.237,2.25H9.75A9.747,9.747,0,0,0,0,12V26.625A2.926,2.926,0,0,0,2.925,29.55h7.8a2.926,2.926,0,0,0,2.925-2.925v-7.8A2.926,2.926,0,0,0,10.725,15.9Z"
            transform="translate(0 -2.25)"
            fill="#fe2118"
          />
        </svg>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget
        sem lectus. Donec ac arcu ut sem efficitur consectetur eget quis nisl.
        Nulla facilisis orci lorem, sit amet tempus neque aliquam quis.
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31.201"
          height="27.301"
          viewBox="0 0 31.201 27.301"
        >
          <g
            id="Group_162"
            data-name="Group 162"
            transform="translate(-871.821 -3824.5)"
          >
            <path
              id="Icon_awesome-quote-left"
              data-name="Icon awesome-quote-left"
              d="M28.276,15.9H23.4V12a3.9,3.9,0,0,1,3.9-3.9h.488a1.459,1.459,0,0,0,1.463-1.463V3.713A1.459,1.459,0,0,0,27.789,2.25H27.3A9.748,9.748,0,0,0,17.551,12V26.626a2.926,2.926,0,0,0,2.925,2.925h7.8A2.926,2.926,0,0,0,31.2,26.626v-7.8A2.926,2.926,0,0,0,28.276,15.9Zm-17.551,0H5.85V12a3.9,3.9,0,0,1,3.9-3.9h.488A1.459,1.459,0,0,0,11.7,6.638V3.713A1.459,1.459,0,0,0,10.238,2.25H9.75A9.748,9.748,0,0,0,0,12V26.626a2.926,2.926,0,0,0,2.925,2.925h7.8a2.926,2.926,0,0,0,2.925-2.925v-7.8A2.926,2.926,0,0,0,10.725,15.9Z"
              transform="translate(903.022 3854.051) rotate(180)"
              fill="#fe2118"
            />
          </g>
        </svg>
      </div>
      <div className="testnomials__main__section__content__card__title">
        Johny laze
      </div>
    </div>
  );
}

export default function AboutUsScreen() {
  return (
    <>
      <Header />
      <div className="service__main__section">
        <img
          src={about_bg}
          alt="about_bg"
          className="service__main__section__img"
        />
        <div className="service__main__section__overlay">
          <div className="service__main__section__overlay__content">
            <div className="service__main__section__overlay__content__heading">
              About Us
            </div>
            <div className="service__main__section__overlay__content__para">
              SELLING ACROSS BORDERS{" "}
            </div>
            <button className="nav__header__link__btn__filled">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
      <div className="service__main__section__more__about">
        <div className="service__main__section__more__about__para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          eget sem lectus. Donec ac arcu ut sem efficitur consectetur eget quis
          nisl. Nulla facilisis orci lorem, sit amet tempus neque aliquam quis.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Vestibulum sit amet justo semper, euismod
          libero eget, tincidunt orci. Sed a felis diam. Donec luctus, magna
          eget semper tristique, ligula quam suscipit ex, at venenatis neque mi
          quis justo Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Vestibulum sit amet justo semper,
          euismod libero eget, tincidunt orci. Sed a felis diam. Donec luctus,
          magna eget semper tristique, ligula quam suscipit ex, at venenatis
          neque mi quis justo Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Vestibulum sit amet justo
          semper, euismod libero eget, tincidunt orci. Sed a felis diam. Donec
          luctus, magna eget semper tristique, ligula quam suscipit ex, at
          venenatis neque mi quis justo
        </div>
      </div>
      <div className="our__founder__main__section">
        <div className="our__founder__main__section__content">
          <div className="our__founder__main__section__content__left">
            <img
              src={founder_pic}
              alt="founder_pic"
              className="our__founder__main__section__content__left__img"
            />
          </div>
          <div className="our__founder__main__section__content__right">
            <div className="our__founder__main__section__content__right__heading">
              Our Foundings
            </div>
            <div className="our__founder__main__section__content__right__para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              eget sem lectus. Donec ac arcu ut sem efficitur consectetur eget
              quis nisl. Nulla facilisis orci lorem, sit amet tempus neque
              aliquam quis. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Vestibulum sit amet justo
              semper, euismod libero eget, tincidunt orci. Sed a felis diam.
              Donec luctus, magna eget semper tristique, ligula quam suscipit
              ex, at venenatis neque mi quis justo.
            </div>
          </div>
        </div>
      </div>
      <div className="join us__says__main__section">
        <div className="join__us__says__main__section__heading">
          Join Us Today!
        </div>
        <div className="join us__says__main__section__para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          eget sem lectus. Donec ac arcu ut sem efficitur consectetur eget quis
          nisl. Nulla facilisis orci lorem,
        </div>
        <button
          style={{ margin: 0, marginTop: "1em" }}
          className="nav__header__link__btn__filled"
        >
          Join Us
        </button>
      </div>
      <div className="testnomials__main__section">
        <div className="testnomials__main__section__heading">Testimonials</div>
        <div className="testnomials__main__section__content">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
      <NewsSection />
      <SubscribeSection />
      <Footer />
    </>
  );
}
