import React from 'react';
import Button from '@mui/material/Button';
import ClickableMap from '../components/ClickableMap';
import CloseIcon from '@mui/icons-material/Close';
import { useRef } from 'react';
const UploadVideo = () => {
  const mapArea = useRef();
  const videoArea = useRef();
  const controlMap = (action) => {
    if (action) {
      mapArea.current.style.display = 'block';
    } else {
      mapArea.current.style.display = 'none';
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
            <div className="mt-6 flex flex-wrap gap-4 border p-4 justify-between">
              {/* Field Name */}
              <div className="flex-1 min-w-[200px]">
                <label
                  htmlFor="fieldName"
                    className="block text-md font-semibold mb-2"
                  >
                  Field Name
                </label>
                <input
                  type="text"
                  id="fieldName"
                  className="w-full border-2 border-black px-3 py-2 rounded"
                  placeholder="Enter Field Name"
                />
              </div>

              {/* Crop Type */}
              <div className="flex-1 min-w-[200px]">
                <label
                  htmlFor="cropType"
                  className="block text-md font-semibold mb-2"
                >
                  Crop Type
                </label>
                <select
                  id="cropType"
                  className="w-full border-2 border-black px-3 py-2 rounded"
                >
                  <option value="maize" selected>
                    Maize
                  </option>
                  <option value="Rice">Rice</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              {/* Scan Cycle */}
              <div className="flex-1 min-w-[200px]">
                <label
                  htmlFor="scanCycle"
                  className="block text-md font-semibold mb-2"
                >
                  Scan Cycle
                </label>
                <select
                  id="scanCycle"
                  className="w-full border-2 border-black px-3 py-2 rounded"
                >
                  <option value="first" selected>
                    First
                  </option>
                  <option value="second">Second</option>
                </select>
              </div>

              {/* Scan Date */}
              <div className="flex-1 min-w-[200px]">
                <label
                  htmlFor="scanDate"
                  className="block text-md font-semibold mb-2"
                >
                  Scan Date
                </label>
                <input
                  type="date"
                  id="scanDate"
                  className="w-full border-2 border-black px-3 py-2 rounded"
                />
              </div>

              {/* Upload Video */}
              <div className="flex-1 min-w-[200px]">
                <label
                  htmlFor="uploadVideo"
                  className="block text-md font-semibold mb-2"
                >
                  Upload Video
                </label>
                <input
                  onChange={(e) => loadPreview(e.target.files[0])}
                  type="file"
                  id="uploadVideo"
                  className="w-full border-2 border-black px-3 py-2 rounded"
                />
              </div>

              {/* Field Location */}
              <div className="flex-1 min-w-[200px]">
                <label
                  htmlFor="fieldLocation"
                  className="block text-md font-semibold mb-2"
                >
                  Field Location
                </label>
                <div
                  className="border-2 border-black px-3 py-2 rounded cursor-pointer text-center"
                  onClick={() => controlMap(true)}
                >
                  <button type="button" id="fieldLocation" className="w-full">
                    Select
                  </button>
                </div>
                <div
                  ref={mapArea}
                  className="absolute w-[300px] hidden shadow-lg border-2 border-black h-[300px] bg-gray-300 top-40 left-50"
                >
                  <div className="flex justify-end p-2">
                    <button type="button" onClick={() => controlMap(false)}>
                      <CloseIcon />
                    </button>
                  </div>
                  <ClickableMap />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-5">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  padding: '6px 25px',
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
