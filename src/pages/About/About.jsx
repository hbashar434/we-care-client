import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-emerald-500">
            About Our WeCare Organization
          </span>
        </h1>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src="https://rb.gy/rge2h"
              alt="About Us"
              className="w-full h-auto mb-8 md:mb-0 rounded-lg shadow-lg"
            />
          </div>

          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg leading-relaxed mb-6">
              At our healthcare organization, we are dedicated to providing
              high-quality medical services to our patients. With a team of
              experienced doctors, nurses, and staff, we strive to deliver the
              best possible care and ensure the well-being of our patients.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              We offer a wide range of medical services, including preventive
              care, diagnostics, treatments, and specialized healthcare
              programs. Our state-of-the-art facilities and advanced medical
              equipment enable us to provide accurate diagnoses and effective
              treatments.
            </p>
            <p className="text-lg leading-relaxed">
              Our team is committed to continuous learning and staying
              up-to-date with the latest advancements in the medical field. We
              believe in a patient-centered approach, where we listen to our
              patients, understand their unique needs, and provide personalized
              care.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-emerald-500">
              Our Mission
            </span>
          </h2>
          <p className="text-lg leading-relaxed">
            Our mission is to improve the health and well-being of our community
            by delivering exceptional healthcare services. We aim to provide
            compassionate and comprehensive care, promote health education, and
            foster a supportive environment for our patients.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-emerald-500">
              Our Team
            </span>
          </h2>
          <p className="text-lg leading-relaxed">
            We have a dedicated team of healthcare professionals who are
            passionate about their work and committed to providing the best care
            for our patients. From our skilled doctors to our caring nurses and
            support staff, everyone plays a crucial role in ensuring the health
            and satisfaction of our patients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
