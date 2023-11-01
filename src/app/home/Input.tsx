import InputCard from "@/components/template/InputCard";
import React from "react";

function Input() {
  return (
    <section className="container">
      <div
        data-aos="zoom-in-up"
        className="bg-white md:py-14 py-5 md:px-16 px-4 md:rounded-[30px] rounded-2xl mb-16"
      >
        <div className="flex flex-col md:gap-5 gap-4 md:mb-11 mb-5">
          <div className="flex md:flex-row flex-col gap-4">
            <div className="md:w-1/2">
              <InputCard title="First Name" placeholder="Your first name" />
            </div>
            <div className="md:w-1/2">
              <InputCard title="Last Name" placeholder="Your last name" />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <InputCard title="Work Email" placeholder="Work Email" />
            <InputCard title="Company Name" placeholder="Optional" />
            <InputCard title="Country" placeholder="United States of America" />
          </div>
          <div className="flex gap-20">
            <div>
              <div className="flex gap-2">
                <p className="text-base text-cyan-950 font-medium mb-2 flex gap-2 whitespace-nowrap">
                  Fixed Price
                </p>
                <p className="text-md text-slate-300 hidden lg:block">
                  Get a clear, upfront cost for your project.
                </p>
              </div>
              <input
                role="button"
                className="md:w-7 w-5 h-5 md:h-7"
                type="checkbox"
              />
            </div>
            <div className="">
              <div className=" flex gap-2">
                <p className="text-base text-cyan-950 font-medium mb-2 flex gap-2 whitespace-nowrap">
                  Times and Material{" "}
                </p>
                <p className="text-md text-slate-300 hidden lg:block">
                  Pay based on the actual hours and resources invested in your
                  project.Costs may vary as they are based on the time and
                  resources utilized.
                </p>
              </div>
              <input
                role="button"
                className="md:w-7 w-5 h-5 md:h-7"
                type="checkbox"
              />
            </div>
          </div>
          <div>
            <label className="md:text-base text-lg font-medium text-cyan-950 md:mb-2 mb-1.5">
              Budget
            </label>
            <div className="w-full">
              <select
                className="w-full focus:outline-none border border-slate-300 rounded-md p-3"
                name="text"
                id=""
              >
                <option className="md:text-xl text-lg" value="">
                  Select an option...
                </option>
                <option className="md:text-xl text-lg" value="Music">
                  Music
                </option>
                <option className="md:text-xl text-lg" value="Music">
                  Football
                </option>
                <option className="md:text-xl text-lg" value="Music">
                  Gamse
                </option>
                <option className="md:text-xl text-lg" value="Music">
                  Enjoing
                </option>
                <option className="md:text-xl text-lg" value="Music">
                  Reading
                </option>
              </select>
            </div>
          </div>
          <div>
            <p className="md:text-base text-lg font-medium text-cyan-950 mb-2">
              Message
            </p>
            <textarea
              className="w-full min-h-[122px] focus:outline-none border border-slate-300 rounded-md p-3 placeholder:text-xl"
              name="text"
              id=""
              placeholder="Must be at least 8 characters."
            ></textarea>
          </div>
        </div>
        <div className="flex justify-between items-center gap-5">
          <div className="flex items-center md:gap-6 gap-2">
            <input
              role="button"
              className="md:w-7 w-5 h-5 md:h-7"
              type="checkbox"
            />
            <span className="md:text-xl text-lg font-medium text-cyan-950">
              Request an NDA
            </span>
          </div>
          <div
            role="button"
            className="text-lg text-white bg-cyan-950 hover:bg-black duration-500 md:py-4 py-2.5 md:px-5 px-4 rounded"
          >
            Send Request
          </div>
        </div>
      </div>
    </section>
  );
}

export default Input;
