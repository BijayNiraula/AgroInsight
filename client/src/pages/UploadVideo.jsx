import React, { useRef } from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ClickableMap from "../components/ClickableMap";

const UploadVideo = () => {
  const mapArea = useRef();
  const videoArea = useRef();
  const fileField = useRef();

  const controlMap = (action) => {
    if (action) {
      mapArea.current.style.display = "block";
    } else {
      mapArea.current.style.display = "none";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fieldName = e.target[0].value;
    const scanDate = e.target[1].value;
    const video = e.target[4].files[0];

    var formData = new FormData();
    formData.append("video", video);
    formData.append("scanDate", scanDate);
    formData.append("fieldName", fieldName);

    const response = await fetch(
      "http://localhost:3000/api/user/analyzevideo",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    console.log(data);
    return 0;
  };

  const loadPreview = (video) => {
    videoArea.current.src = URL.createObjectURL(video);
  };

  return (
    <Box className="bg-gray-50 min-h-screen p-5 rounded-md md:p-10">
      {/* <Typography variant="h3" className="text-center font-bold text-xl mb-5">
        Upload Video
      </Typography> */}
      <div className="text-center text-3xl font-bold text-gray-800 mb-5">
      Upload Video
      </div>
      <Card className="shadow-lg rounded-lg bg-white p-5">
        <CardContent>
          {/* Video Preview */}
          <Box className="flex justify-center mb-6">
            <video
              ref={videoArea}
              src=""
              controls
              className="md:w-[50%] w-full h-[200px] rounded shadow-md"
            />
          </Box>

          {/* Form Section */}
          <form onSubmit={handleSubmit}>
            <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Field Name */}
              <Box>
                <Typography variant="body1" className="font-semibold mb-2">
                  Field Name
                </Typography>
                <input
                  type="text"
                  className="w-full border-2 border-gray-300 px-3 py-2 rounded"
                  placeholder="Enter Field Name"
                  required
                />
              </Box>

              {/* Scan Date */}
              <Box>
                <Typography variant="body1" className="font-semibold mb-2">
                  Scan Date
                </Typography>
                <input
                  type="date"
                  className="w-full border-2 border-gray-300 px-3 py-2 rounded"
                  required
                />
              </Box>

              {/* Field Location */}
              <Box>
                <Typography variant="body1" className="font-semibold mb-2">
                  Field Location
                </Typography>
                <div
                  className="w-full border-2 border-gray-300 px-3 py-2 rounded cursor-pointer text-center"
                  onClick={() => controlMap(true)}
                >
                  Select Location
                </div>
                <Box
                  ref={mapArea}
                  className="absolute hidden w-[300px] h-[300px] bg-gray-300 border-2 border-gray-400 rounded shadow-lg top-40 left-50"
                >
                  <Box className="flex justify-end p-2">
                    <button type="button" onClick={() => controlMap(false)}>
                      <CloseIcon />
                    </button>
                  </Box>
                  <ClickableMap />
                </Box>
              </Box>

              {/* Upload Video */}
              <Box>
                <Typography variant="body1" className="font-semibold mb-2">
                  Upload Video
                </Typography>
                <input
                  type="file"
                  ref={fileField}
                  onChange={(e) => loadPreview(e.target.files[0])}
                  className="w-full border-2 border-gray-300 px-3 py-2 rounded"
                  required
                />
              </Box>
            </Box>

            {/* Submit Button */}
            <Box className="flex justify-center mt-5">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  padding: "10px 30px", 
                  backgroundColor: "#358c5c",
                  "&:hover": { backgroundColor: "#2f855a" },
                }}
              >
                Analyze
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UploadVideo;
