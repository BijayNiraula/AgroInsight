import React from "react";
import { Link } from "react-router-dom";
const ProcessedVideo = () => {
  return (
    <section>
      <h3 className="text-2xl text-[black] font-bold"> Processed Video</h3>
      <hr className="text-[black] bg-[black]  border-[1px] mt-2 border-[black]" />
      <div className="">
        <div className="bg-white w-[100%] my-4 px-3  flex">
          <div className="w-2/12 p-2">
            <div className="w-[130px] h-[90px] bg-[#f0a4a4]"></div>
          </div>
          <div className="w-3/12 flex items-center">
            <p className="font-semibold text-xl  "> Maize Photage 1</p>
          </div>
          <div className="w-7/12 flex items-center justify-end">
            <div className="pe-4">
              <Link
                to={"/reports"}
                className="border border-[black] px-3 py-1 bg-[green] text-white "
              >
                View Detail
              </Link>
              <br />
              <p className="mt-2 w-[100%] flex justify-end">2024/12/12</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessedVideo;
