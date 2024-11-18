import React from "react";

const Howtouse = () => {
  return (
    <section className="min-h-screen bg-gray-50 rounded-md p-5 md:p-10">
      <h3 className="text-3xl font-bold text-gray-800 mb-5">How to Use</h3>
      <hr className="border-gray-400 mb-6" />

      <div className="space-y-6">
        <div>
          <h4 className="text-xl font-semibold text-gray-800">Dashboard</h4>
          <p className="text-gray-600">
            The dashboard provides an overview of all your processed videos,
            charts displaying soil moisture, temperature, and humidity, along
            with useful farming recommendations.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-800">Upload</h4>
          <p className="text-gray-600">
            Here, you can upload new videos along with field details such as
            field name, scan date, and location. This helps to analyze and
            process new video data.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-800">
            Processed Video
          </h4>
          <p className="text-gray-600">
            In this section, you can view all the processed videos, including
            the date and thumbnail. You can also access detailed reports for
            each video.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-gray-800">Reports</h4>
          <p className="text-gray-600">
            The reports section inside processed videos lets you analyze
            detailed scan data, growth rates, disease and pest detections, and
            view solutions to improve crop health.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Howtouse;
