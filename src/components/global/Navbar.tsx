import React from "react";

function Navbar() {
  return (
    <section>
      <div className="flex gap-[5%] items-center justify-between mb-[140px]">
        <div
          className="bg-no-repeat bg-cover w-[40%] flex gap-[20%] pt-5 pb-4"
          style={{backgroundImage: `url('/picture/Vector.png')`}}
        >
          <div className="ml-[20%] text-xl font-semibold text-white">
            Services
          </div>
          <div className=" text-xl font-semibold text-white">Technology</div>
        </div>
        <div className="mt-8 w-[13%] flex justify-center">
          <img className="" src="/picture/Vector.svg" alt="" />
        </div>
        <div
          className="bg-no-repeat bg-cover w-[42%] flex gap-[20%] pt-5 pb-4 justify-end"
          style={{backgroundImage: `url('/picture/Vector (1).png')`}}
        >
          <div className="text-xl font-semibold text-white">Request</div>
          <div className="mr-[20%] text-xl font-semibold text-white">
            Contact
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
