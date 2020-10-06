import React from "react";

export default function Feature(props) {
  return (
    <div className="bg-accent-color ">
      <div className=" bg-gray-200 bg-opacity-75 h-64 ">
        <div className="container mx-auto lg:px-24 py-10 space-y-12">
          <div className="text-center font-medium text-gray-600">
            FEATURE UNIVERSITIES
          </div>
          <div className="grid grid-cols-4 ">
            <img src="/images/Feature1.png" alt="Feature1" className="h-12" />
            <img src="/images/Feauture2.png" alt="Feature2" className="h-12" />
            <img src="/images/Feature3.png" alt="Feature3" className="h-12" />
            <img src="/images/Feature4.png" alt="Feature4" className="h-12" />
          </div>
        </div>
      </div>
    </div>
  );
}
