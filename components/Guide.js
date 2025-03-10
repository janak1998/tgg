"use client";
import React from "react";
import Image from "next/image";
import RingBtn from "./RingBtn";

const Guide = () => {
  return (
    <section
      className="container px-4 py-10 mx-auto mt-6 dark:bg-gray-900 dark:text-white rounded-lg shadow-lg"
      id="guide"
    >
      <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
        Your Path to Germany in 5 Simple Steps
      </h2>
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="lg:w-1/2 space-y-6">
          <div className="dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Step 1: Schedule Free Consultation
            </h3>
            <p>
              Book a session with our experts to discuss your goals and plans.
            </p>
          </div>
          <div className="dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Step 2: Personalized Resume & Application Support
            </h3>
            <p>
              Get tailored assistance to craft a compelling resume and
              application.
            </p>
          </div>
          <div className="dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Step 3: Submission & Follow-up
            </h3>
            <p>
              Submit your application and receive continuous support throughout
              the process.
            </p>
          </div>
          <div className="dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Step 4: Complete Visa Guidance 
            </h3>
            <p>
            Get full guidance through every step of your visa application process.
            </p>
          </div>
          <div className="dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Step 5: Get Ready for Your New Life in Germany
            </h3>
            <p>
              Prepare for your move with our comprehensive pre-departure
              guidance.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
          <Image
            src="/assets/steps_illustration.svg"
            alt="A beautiful landscape"
            width={800}
            height={500}
          />
        </div>
      </div>
      <div className="mt-8 text-center">
        <RingBtn />
      </div>
    </section>
  );
};

export default Guide;
