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
