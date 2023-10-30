import InputCard from "@/components/template/InputCard";
import React from "react";

function Input() {
  return (
    <section className="container">
      <div className="bg-white py-14 px-16 rounded-[30px] mb-16">
        <div className="flex flex-col gap-5 mb-11">
          <div className="flex gap-4">
            <div className="w-1/2">
              <InputCard title="First Name" placeholder="Your first name" />
            </div>
            <div className="w-1/2">
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
              <p className="text-base text-cyan-950 font-medium mb-2">
                Fixed Price{" "}
                <span className="text-md text-slate-300">
                  Get a clear, upfront cost for your project.
                </span>
              </p>
              <input role="button" className="w-7 h-7" type="checkbox" />
            </div>
            <div>
              <p className="text-base text-cyan-950 font-medium mb-2">
                Times and Material{" "}
                <span className="text-md text-slate-300">
                  Pay based on the actual hours and resources invested in your
                  project.Costs may vary as they are based on the time and
                  resources utilized.
                </span>
              </p>
              <input role="button" className="w-7 h-7" type="checkbox" />
            </div>
          </div>
          <div>
            <InputCard title="Budget" placeholder="Select an option..." />
          </div>
          <div>
            <p className="text-base font-medium text-cyan-950 mb-2">Message</p>
            <textarea
              className="w-full min-h-[122px] focus:outline-none border border-slate-300 rounded-md p-3"
              name="text"
              id=""
              placeholder="Must be at least 8 characters."
            ></textarea>
          </div>
        </div>
        <div className="flex justify-between items-center gap-5">
          <div className="flex items-center gap-6">
            <input role="button" className="w-7 h-7" type="checkbox" />
            <span className="text-xl font-medium text-cyan-950">
              Request an NDA
            </span>
          </div>
          <div
            role="button"
            className="text-lg text-white bg-cyan-950 py-4 pl-6 pr-5 rounded"
          >
            Send Request
          </div>
        </div>
      </div>
    </section>
  );
}

export default Input;
