import React from "react";
import { Link } from "react-router-dom";

const ProcessedVideo = () => {
  const processedVideos = [
    {
      id: 1,
      title: "Maize Footage 1",
      date: "2024/12/12",
      thumbnailColor: "#f0a4a4", // Example thumbnail color
      link: "/reports",
    },
    // Add more video objects as needed
  ];

  return (
    <section className="min-h-screen bg-gray-50 p-5 md:p-10">
      <h3 className="text-3xl font-bold text-gray-800 mb-5">
        Processed Videos
      </h3>
      <hr className="border-gray-400 mb-6" />

      {processedVideos.map((video) => (
        <div
          key={video.id}
          className="bg-white rounded-lg shadow-md p-4 mb-5 flex flex-wrap items-center"
        >
          {/* Thumbnail */}
          <div
            className="w-32 h-20 md:w-40 md:h-24 rounded-lg"
            style={{
              backgroundColor: video.thumbnailColor,
            }}
          ></div>

          {/* Video Info */}
          <div className="flex-1 px-4">
            <p className="text-lg font-semibold text-gray-800">{video.title}</p>
            <p className="text-sm text-gray-500">Uploaded on: {video.date}</p>
          </div>

          {/* Actions */}
          <div>
            <Link
              to={video.link}
              className="px-4 py-2 text-white bg-green-600 rounded-lg shadow hover:bg-green-700"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProcessedVideo;
