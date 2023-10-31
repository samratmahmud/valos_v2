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
    <div className="container relative  z-50">
      <div className="text-6xl font-semibold text-white text-center mb-10 max-w-[800px] m-auto">
        Empowering Businesses with Full-Stack Excellence{" "}
      </div>
      <div className="text-xl font-medium text-white bg-sky-500 py-3 px-10 rounded-lg font-manrope max-w-[172px] m-auto mb-[102px]">
        Get in touch
      </div>
      <div className="flex lg:flex-row flex-wrap lg:flex-nowrap gap-4 lg:gap-5 justify-between mb-48">
        {networkCard.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center relative z-0 lg:w-full w-[calc(100%)] md:w-[calc(50%-8px)] min-w-[174px] ${
              networkCard.length % 2 !== 0 ? "last:w-full" : ""
            } h-full`}
          >
            <span className="absolute -inset-[1px] -z-10 bg-md rounded-[30px]" />
            <div className="bg-[#1A3453] py-6 px-7 w-full flex flex-col items-center rounded-[30px]">
              <div className="mb-3">
                <img src={item.pic} alt="" />
              </div>
              <div className="text-3xl font-semibold text-sky-500">
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-[60px] justify-between items-center mb-48">
        <div className="max-w-[513px] text-white">
          <div className="text-5xl font-semibold mb-10">
            The unique promise for affordable work
          </div>
          <div className="text-2xl">
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
        <div>
          <img src="/picture/Frame 27.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
