import React, { useEffect, useState } from "react";
import DoctorCard from "../DoctorCard/DoctorCard";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div className="mx-16 my-16">
      <h1 className=" text-5xl font-bold text-blue-600 text-center mb-6">
        Meet Our Specialist
      </h1>
      <div className=" grid lg:grid-cols-3 gap-6 ">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
