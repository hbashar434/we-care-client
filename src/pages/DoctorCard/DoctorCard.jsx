import React from "react";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const { _id, image, name, expertise } = doctor;
  return (
    <div className="card w-96 bg-base-100 shadow-md">
      <figure className="px-10 pt-10">
        <img src={image} alt="doctor Image" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{expertise}</p>
        <div className="card-actions">
          <Link to={`/disease/${_id}`}>
            <button className="my-btn btn-wide">Services</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
