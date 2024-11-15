import React from "react";
import Button from "@mui/material/Button";
import ClickableMap from "../components/ClickableMap";
import CloseIcon from "@mui/icons-material/Close";
import { useRef } from "react";
const UploadVideo = () => {
  const mapArea = useRef();
  const videoArea = useRef();
  const controlMap = (action) => {
    if (action) {
      mapArea.current.style.display = "block";
    } else {
      mapArea.current.style.display = "none";
    }
  };

  const loadPreview = (video) => {
    videoArea.current.src = URL.createObjectURL(video);
  };
  return (
    <section className="h-[100%]">
      <div>
        <h3 className="text-center text-2xl font-bold">Upload Video</h3>
      </div>
      <div className="flex  justify-center mt-5">
        <div className="bg-white w-[80%]  py-2 ">
          <div className="flex justify-center mt-5">
            <video
              ref={videoArea}
              src=""
              controls
              className="w-[40%] h-[200px]"
            />
          </div>
          <form action="" method="post">
            <div className="mt-6 flex flex-wrap border justify-around">
              <div className="w-4/12 py-1 flex-shrink-0">
                <div>
                  <label htmlFor="fieldName" className="text-md font-semibold">
                    Field Name
                  </label>
                  <br />
                  <input
                    type="text"
                    id="fieldName"
                    className=" w-[100%]   border-[black] border-[2px] px-3 py-1"
                    placeholder="Enter Field Name"
                  />
                </div>
              </div>
              <div className="w-3/12 flex-shrink-0 py-1">
                <div>
                  <label htmlFor="cropType" className="text-md font-semibold">
                    Crop Type
                  </label>
                  <br />
                  <select
                    id="cropType"
                    className=" w-[100%]  border-[black] border-[2px] px-3 py-1"
                  >
                    <option value="maize" selected>
                      Maize
                    </option>
                    <option value="Rice">Rice</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <div className="w-3/12 flex-shrink-0 py-1">
                <div>
                  <label htmlFor="scanCycle" className="text-md font-semibold">
                    Scan Cycle
                  </label>
                  <br />
                  <select
                    id="scanCycle"
                    className=" w-[100%]  border-[black] border-[2px] px-3 py-1"
                  >
                    <option value="first" selected>
                      First
                    </option>
                    <option value="second">Second</option>
                  </select>
                </div>
              </div>

              <div className="w-3/12 flex-shrink-0 py-1">
                <div>
                  <label htmlFor="scanDate" className="text-md font-semibold">
                    Scan Date
                  </label>
                  <br />
                  <input
                    type="date"
                    id="scanDate"
                    className="w-[100%] border-[black] border-[2px] px-3 py-1"
                    placeholder="Enter Field Name"
                  />
                </div>
              </div>
              <div className="w-4/12 flex-shrink-0 py-1">
                <div>
                  <label
                    htmlFor="uploadVideo"
                    className="text-md font-semibold"
                  >
                    Upload Video
                  </label>
                  <br />
                  <input
                    onChange={(e) => loadPreview(e.target.files[0])}
                    type="file"
                    id="uploadVideo"
                    className="w-[100%] border-[black] border-[2px] px-3 py-1"
                    placeholder="Enter Field Name"
                  />
                </div>
              </div>
              <div className="w-4/12 flex-shrink-0 py-1">
                <div className="">
                  <label
                    htmlFor="fieldLocation"
                    className="text-md font-semibold"
                  >
                    Field Location
                  </label>
                  <br />
                  <div
                    className="border-[black] border-[2px] px-3 py-1 cursor-pointer"
                    onClick={() => controlMap(true)}
                  >
                    <button
                      type="button"
                      id="fieldLocation"
                      className=" "
                      placeholder="Enter Field Name"
                    >
                      Select
                    </button>
                  </div>
                </div>
                <div
                  ref={mapArea}
                  className=" absolute w-[400px] hidden shadow-lg border-[black] border-2 h-[400px] bg-[#9a9696] top-40 left-50"
                >
                  <div className="flex justify-end p-2">
                    <button type="button" onClick={() => controlMap(false)}>
                      {" "}
                      <CloseIcon />
                    </button>
                  </div>
                  <ClickableMap />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <Button
                type="submit"
                variant="contained"
                className=""
                sx={{
                  paddingRight: "50px",
                  paddingLeft: "50px",
                  paddingTop: "6px",
                  paddingBottom: "6px",
                }}
                color="success"
              >
                Analyze
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UploadVideo;
