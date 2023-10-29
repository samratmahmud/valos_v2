import React from "react";

function Navbar() {
  return (
    <section>
      <div className="flex gap-[60px] items-center justify-between">
        <div
          className="bg-no-repeat bg-cover min-w-[570px] flex gap-36 pt-5 pb-4"
          style={{backgroundImage: `url('/picture/Vector.png')`}}
        >
          <div className="ml-[138px] text-xl font-semibold text-white">
            Services
          </div>
          <div className=" text-xl font-semibold text-white">Technology</div>
        </div>
        <div className="mt-8">
          <img src="/picture/Vector.svg" alt="" />
        </div>
        <div
          className="bg-no-repeat bg-cover min-w-[590px] flex gap-36 pt-5 pb-4 justify-end"
          style={{backgroundImage: `url('/picture/Vector (1).png')`}}
        >
          <div className="text-xl font-semibold text-white">Request</div>
          <div className="mr-36 text-xl font-semibold text-white">Contact</div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
