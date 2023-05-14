import React from "react";
import doctor from "../../../public/doctor.webp";
const Banner = () => {
  return (
    <div
      className="hero min-h-[calc(100vh-64px)]"
      style={{
        backgroundImage: `url(${doctor})`,
      }}
    >
      <div className="hero-content  text-neutral-content lg:pl-96">
        <div className=" space-y-4">
          <h1 className="mb-5 text-gray-50 font-bold">
            <p className="text-5xl text-emerald-600">Feel Better About</p>
            <p className="text-5xl text-emerald-600">Finding Healthcare</p>
          </h1>
          <button className="my-btn-g font-semibold normal-case">
            Make Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
