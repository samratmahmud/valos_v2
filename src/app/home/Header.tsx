import React from "react";

const networkCard = [
  {
    pic: "/picture/icon web.png",
    title: "Web",
  },
  {
    pic: "/picture/iconmobile.png",
    title: "Mobile",
  },
  {
    pic: "/picture/icon desktop.png",
    title: "Desktop",
  },
  {
    pic: "/picture/Vector (2).png",
    title: "Maintenance",
  },
  {
    pic: "/picture/Frame.png",
    title: "UX/UI",
  },
];

function Header() {
  return (
    <div className="container relative z-50">
      <div
        data-aos="fade-down-left"
        className="md:text-6xl text-4xl font-semibold text-white text-center md:mb-10 mb-6 max-w-[800px] m-auto"
      >
        Empowering Businesses with Full-Stack Excellence{" "}
      </div>
      <div
        data-aos="fade-up-right"
        role="button"
        className="text-xl font-medium text-white bg-sky-500 py-3 px-10 rounded-lg font-manrope max-w-[172px] m-auto md:mb-[102px] mb-16 hover:bg-blue-700 duration-300"
      >
        Get in touch
      </div>
      <div className="flex lg:flex-row flex-wrap lg:flex-nowrap gap-4 lg:gap-5 justify-between lg:mb-48 mb-16">
        {networkCard.map((item, index) => (
          <div
            data-aos={`${index % 2 === 0 ? "fade-left" : "fade-right"}`}
            key={index}
            className={`flex flex-col items-center relative z-0 lg:w-full w-[calc(100%)] md:w-[calc(50%-8px)] min-w-[175px] ${
              networkCard.length % 2 !== 0 ? "last:w-full" : ""
            } h-full`}
          >
            <span className="absolute -inset-[1px] -z-10 bg-md md:rounded-[30px] rounded-3xl" />
            <div className="bg-[#1A3453] md:py-6 py-4 px-7 w-full flex flex-col items-center md:rounded-[30px] rounded-3xl">
              <div className="mb-3">
                <img src={item.pic} alt="" />
              </div>
              <div className="md:text-3xl text-2xl font-semibold text-sky-500">
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-14 gap-7 justify-between items-center lg:mb-48 mb-12">
        <div data-aos="fade-down-right" className="lg:max-w-[513px] text-white">
          <div className="md:text-5xl text-4xl font-semibold md:mb-10 mb-6">
            The unique promise for affordable work
          </div>
          <div className="md:text-2xl text-lg">
            With our full-stack excellence and low-cost advantage, we empower
            businesses to thrive without breaking the bank. By leveraging our
            comprehensive solutions and remote team expertise, we help
            businesses achieve their goals while optimizing costs. With reduced
            overhead expenses and access to top remote talent, our low-cost
            advantage ensures that businesses can maximize their resources, save
            money in the long term, and invest in other critical areas of
            growth. Experience the power of full-stack excellence without
            compromising your budget.
          </div>
        </div>
        <div data-aos="fade-down-left">
          <img className="w-screen" src="/picture/Frame 27.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
