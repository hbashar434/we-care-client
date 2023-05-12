import React from "react";
import { useLoaderData } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const DiseaseCard = () => {
  const data = useLoaderData();
  const diseases = data.diseases;

  return (
    <div className="grid gap-6 lg:grid-cols-3 mx-16 lg:my-32">
      {diseases.map((disease, idx) => (
        <div
          key={idx}
          className="max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col"
        >
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-2xl mb-2 my-btn-blue">
              {disease.name}
            </div>
            {/* <p className="text-gray-700 text-base">
          <strong>Symptoms:</strong> {disease.symptoms.join(", ")}
        </p> */}
            <div className="text-gray-700 text-base space-y-1">
              <p className="flex items-center">
                <strong>Symptoms :</strong>
                <MdOutlineKeyboardDoubleArrowDown className="mt-1" size={20} />
              </p>
              {disease.symptoms.map((symptom, idx) => (
                <p className="my-btn-green" key={idx}>
                  {symptom}
                </p>
              ))}
            </div>
            <p className="text-gray-700 text-base mt-3">
              <strong>Treatment :</strong> {disease.treatment}
            </p>
          </div>
          <div className="px-6 py-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Make an Appointment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiseaseCard;
