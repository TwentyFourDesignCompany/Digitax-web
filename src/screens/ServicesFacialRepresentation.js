import React from "react";
import Header from "../component/Header";
import NewsSection from "../component/NewsSection";
import Footer from "../component/Footer";
import SubscribeSection from "../component/SubscribeSection";
import services_bg_facial from "../assets/services_bg_facial.png";
import user from "../assets/user.png";
import guarantee from "../assets/guarantee.png";
import thumb from "../assets/thumb.png";
import transparent from "../assets/transparent.png";
import trust from "../assets/trust.png";
import TrustCard from "../component/TrustCard";

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

function HowtoCard({ value, heading, para }) {
  return (
    <div className="how__work__section__content__card">
      <div className="how__work__section__content__card__cirle">{value}</div>
      <div className="how__work__section__content__card__heading">
        {heading}
      </div>
      <div className="how__work__section__content__card__para">{para}</div>
    </div>
  );
}

function HasselCard() {
  return (
    <div className="service__main__section__more__about__card__wrapper__card">
      <div className="service__main__section__more__about__card__wrapper__card__header">
        <img
          src={guarantee}
          alt="guarantee"
          className="service__main__section__more__about__card__wrapper__card__img"
        />
        <div className="service__main__section__more__about__card__wrapper__card__heading">
          Hassle free process
        </div>
      </div>
      <div className="service__main__section__more__about__card__wrapper__card__para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget
        sem lectus. Donec ac arcu ut sem efficitur consectetur eget quis nisl.
        Nulla facilisis orci lorem, sit amet tempus neque aliquam quis. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos.
      </div>
    </div>
  );
}

export default function ServicesFacialRepresentation() {
  return (
    <>
      <Header />
      <div className="service__main__section">
        <img
          src={services_bg_facial}
          alt="services_bg"
          className="service__main__section__img"
        />
        <div className="service__main__section__overlay">
          <div className="service__main__section__overlay__content">
            <div className="service__main__section__overlay__content__heading">
              FISCAL REPRESENTATION
            </div>
            <div className="service__main__section__overlay__content__para">
              Taxation of non-resident businesses in Africa
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
          Fiscal Representation is the act of representing a non-established
          organisation to the respective tax authority. In its simplest form,
          the fiscal representative stands alongside the non-established
          business to be its de facto local physical presence.
        </div>
        <div className="service__main__section__more__about__para">
          Historically this important function has been conducted by legal and
          accounting firms. Typically, outside Africa, the cost for this service
          depends upon the size and complexity of the organisation, with some
          clients requiring representation in multiple countries.
        </div>
        <div className="service__main__section__more__about__para">
          Bank guarantees add to these fees in many jurisdictions. It is a
          fragmented market with very few representatives operating in more than
          one country. The requirement of fiscal representation is cost
          prohibitive to many SMEs and inconvenient and inefficient for MNCs.
        </div>
        <div className="service__main__section__more__about__para">
          In today’s e-commerce world, most online sellers (merchants) on
          platforms such as Amazon, Alibaba, eBay etc. are SMEs, for whom the
          conventional fiscal representation models fail.
        </div>
        <div className="service__main__section__more__about__para">
          The solution from Digitax Group addresses many of these problems
          ensuring a win-win position for all market participants in Africa.
        </div>

        <div className="service__main__section__more__about__heading">
          How can our IOSS service help you?
        </div>
      </div>
      <div className="how__work__section">
        <div className="how__work__section__heading">How Does it work?</div>
        <div className="how__work__section__content">
          <HowtoCard
            heading="Administrative benefits"
            para=" The Fiscal Representative takes care of registering for VAT, submitting the VAT return, paying the amount of VAT due to the authorities, submitting the European Sales Listing and Intrastat declarations if applicable.
"
            value="1"
          />
          <HowtoCard
            heading="Import VAT deferment licence"
            para="When imported goods are released for free circulations in the African country, import duties and import VAT become due and both should be paid at the moment the import declaration is submitted. However, with the Import VAT deferment system, the payment of import VAT is postponed from the moment of submitting the import declaration until submitting the next periodic VAT return. This means that the payable import VAT reported in the VAT return can in principle be deducted as input tax in the same VAT return. So, on balance no import VAT is actually paid, resulting in a cashflow advantage."
            value="2"
          />
          <HowtoCard
            heading="VAT Warehouse"
            para="VAT warehouse is an authorised facility that enables goods in free circulation to be stored and traded without VAT becoming due. The goods can be stored for an unlimited amount of time and partially dispatched, VAT is not charged on goods bought and sold within a VAT warehouse and only pay VAT when leaving the warehouse.

These facilities are ideal for importers which require some kind of warehouse handling such as emptying, palletizing, quality control, and sorting, and wish to defer payment of import VAT.  Besides, when the goods leave the VAT warehouse, the customer outside the warehouse can account for VAT under the Reverse Charge Mechanism.
"
            value="3"
          />
          <HowtoCard
            heading="Reverse Charge Mechanism"
            para="The principle of the Reverse Charge Mechanism is that it shifts the liability to account for the VAT on a supply from the supplier to the buyer of a good or service. The main purpose is to avoid the need for the supplier to VAT register and account for VAT in a country in which he is not established. If the supplier incurs any local VAT on costs related to the service or goods supplied under the Reverse Charge, they may recover them through a VAT reclaim.  Reverse charges apply to all shipments of goods or services issued on a B2B (business to business) basis within the African country concerned."
            value="4"
          />
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
            para="Digitax is your trusted partner to provide necessary support for your tax operations."
          />
          <TrustCard
            img={transparent}
            title="Transparent"
            para=" As part of the pillars of our organisation, we make sure to be transparent at every step of our tax processes."
          />
          <TrustCard
            img={trust}
            title="Credibility"
            para="Digitax is a thought leader in fiscal representation in Africa. We have the credibility to lead the compliance ecosystem."
          />
          <TrustCard
            img={thumb}
            title="Convenient"
            para=" We make every process and steps easy by offering risk mitigated and automated service."
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
