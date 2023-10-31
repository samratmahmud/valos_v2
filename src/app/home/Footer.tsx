import React from "react";

function Footer() {
  return (
    <section className="container">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 items-center justify-between md:pt-16 md:pb-9 pb-5">
        <div>
          <div className="mb-6">
            <img src="/picture/logo valos.svg" alt="" />
          </div>
          <div className="text-base font-medium text-white lg:max-w-[341px] leading-5">
            At Valosit, we are dedicated to empowering businesses with our
            full-stack excellence. We understand that in today's dynamic and
            fast-paced business environment, organizations require comprehensive
            solutions that encompass the entire spectrum of their needs. That's
            why we offer a holistic approach, combining expertise in front-end
            and back-end development, cutting-edge technologies, and industry
            best practices.
          </div>
        </div>
        <div className="md:text-right lg:text-left">
          <div role="button" className="text-lg text-white md:mb-8 mb-3">
            sales@valosit.co.ik
          </div>
          <div className="text-lg text-white md:leading-6">
            <p>71-75 Shelton Street, Covent Garden ,</p>
            <p>London, United Kingdom, WC2H 9JQ</p>
          </div>
        </div>
        <div>
          <img src="/picture/image 3.png" alt="" />
        </div>
      </div>
      <hr className="border border-neutral-400" />
      <div className="flex flex-row justify-between items-center md:gap-10 gap-3 md:py-6 py-4">
        <div className="md:text-base text-md text-white leading-8">
          Developed with React js
        </div>
        <div role="button" className="md:text-base text-md text-white">
          © 2021 VALOS IT LTD. All rights reserved
        </div>
      </div>
    </section>
  );
}

export default Footer;
