import React from "react";
import Header from "../component/Header";
import NewsSection from "../component/NewsSection";
import Footer from "../component/Footer";
import SubscribeSection from "../component/SubscribeSection";
import services_bg_partnerships from "../assets/services_bg_partnerships.png";
import user from "../assets/user.png";
import guarantee from "../assets/guarantee.png";
import thumb from "../assets/thumb.png";
import transparent from "../assets/transparent.png";
import trust from "../assets/trust.png";
import TrustCard from "../component/TrustCard";

function HowtoCard({ value }) {
  return (
    <div className="how__work__section__content__card">
      <div className="how__work__section__content__card__cirle">{value}</div>
      <div className="how__work__section__content__card__para">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
        aspernatur nobis ut est in id commodi quaerat. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Tempora.
      </div>
    </div>
  );
}

export default function ServicesPartnerships() {
  return (
    <>
      <Header />
      <div className="service__main__section">
        <img
          src={services_bg_partnerships}
          alt="services_bg"
          className="service__main__section__img"
        />
        <div className="service__main__section__overlay">
          <div className="service__main__section__overlay__content">
            <div className="service__main__section__overlay__content__heading">
              PARTNERS & COMPLIANCE
            </div>
            <div className="service__main__section__overlay__content__para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              quis purus molestie, laoreet ipsum at,
            </div>
            <button className="nav__header__link__btn__filled">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
      <div className="service__main__section__more__about">
        <div className="service__main__section__more__about__heading">
          What is fiscal representation?
        </div>
        <div className="service__main__section__more__about__para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          eget sem lectus. Donec ac arcu ut sem efficitur consectetur eget quis
          nisl. Nulla facilisis orci lorem, sit amet tempus neque aliquam quis.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Vestibulum sit amet justo semper, euismod
          libero eget, tincidunt orci. Sed a felis diam. Donec luctus, magna
          eget semper tristique, ligula quam suscipit ex, at venenatis neque mi
          quis justo
        </div>
        <div className="service__main__section__more__about__heading">
          How can our IOSS service help you?
        </div>
      </div>
      <div className="how__work__section">
        <div className="how__work__section__heading">How Does it work?</div>
        <div className="how__work__section__content">
          <HowtoCard value="1" />
          <HowtoCard value="2" />
          <HowtoCard value="3" />
          <HowtoCard value="4" />
        </div>
      </div>
      <div className="trusted__main__container">
        <div className="trusted__main__container_heading">
          We are your transparent and trusted partner
        </div>
        <div className="trusted__main__container_para">
          Our mission is to help your business grow, especially financially. You
          can consult anytime
        </div>
        <div className="trusted__main__container__contant">
          <TrustCard
            img={trust}
            title="Trusted"
            para="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          deserunt laudantium vitae, numquam dolorum doloribus nihil
          dignissimos"
          />
          <TrustCard
            img={transparent}
            title="Transparent"
            para="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          deserunt laudantium vitae, numquam dolorum doloribus nihil
          dignissimos "
          />
          <TrustCard
            img={transparent}
            title="Creditablilty"
            para="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          deserunt laudantium vitae, numquam dolorum doloribus nihil
          dignissimos iusto "
          />
          <TrustCard
            img={thumb}
            title="Convenient"
            para="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          deserunt laudantium vitae, numquam dolorum doloribus nihil
          dignissimos iusto "
          />
        </div>
      </div>
      <div className="our__client__says__main__section">
        <div className="our__client__says__main__section__content">
          <div className="our__client__says__main__section__heading">
            What our Client say...
          </div>
          <div className="our__client__says__main__section__para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            earum consequatur quam temporibus odit sunt architecto corrupti
            error, blanditiis, repellat ullam vitae saepe ipsa facere eligendi
            facilis expedita accusantium modi.
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
      <NewsSection />
      <SubscribeSection />
      <Footer />
    </>
  );
}
