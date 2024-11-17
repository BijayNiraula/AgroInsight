import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import HumidityLineChart from "../components/HumidityLineChart";
import b from "../assets/b.jpg";
import c from "../assets/c.jpg";
import a from "../assets/a.mp4";
import SpeakIcon from "../assets/speechIcon.png";
const Reports = () => {
  const [value, setValue] = React.useState("1");
  const [image, setImage] = React.useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function textToSpeechNepali(text) {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);

      // Get all available voices
      const voices = speechSynthesis.getVoices();

      // Find the Nepali voice (if available)
      const nepaliVoice = voices.find((voice) => voice.lang === "ne-NP"); // Nepali language code

      if (nepaliVoice) {
        utterance.voice = nepaliVoice; // Set Nepali voice
      } else {
        console.log("Nepali voice not found, using default voice.");
      }

      // Set pitch and rate (optional)
      utterance.pitch = 1; // Pitch value (0 to 2)
      utterance.rate = 1; // Rate value (0.1 to 10)

      // Speak the text
      speechSynthesis.speak(utterance);
    } else {
      console.log("Text-to-speech is not supported in this browser.");
    }
  }

  const popRef = useRef();
  const pop = (action) => {
    if (action) {
      popRef.current.style.display = "";
    } else {
      popRef.current.style.display = "none";
    }
  };
  return (
    <section className="min-h-screen bg-gray-100 p-5">
      <div
        ref={popRef}
        style={{ display: "none" }}
        className="absolute top-0 left-0 p-5  h-[100vh] z-30 w-[100vw] bg-white"
      >
        <div className="flex justify-start">
          {" "}
          <div className="mb-5">
            <button
              onClick={() => pop(false)}
              className="text-green-700 text-4xl font-bold hover:text-green-500"
            >
              &larr;
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={b} className="md:w-[30%] w-[70%]" alt="" />
        </div>
      </div>
      {/* Back Button */}
      <div className="mb-5">
        <Link
          to={"/processedVideo"}
          className="text-green-700 text-2xl font-bold hover:text-green-500"
        >
          &larr;
        </Link>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => textToSpeechNepali("नमस्ते, तपाईंलाई कस्तो छ?")}
          className="w-[50px] rounded "
        >
          <img
            className="rounded-xl hover:bg-slate-400 cursor-pointer "
            src={SpeakIcon}
            alt="Speak"
          />
        </button>
      </div>

      {/* Header */}
      <h3 className="text-center text-3xl font-bold text-gray-800 mb-5">
        Reports
      </h3>
      <hr className="border-gray-400 mb-6" />

      {/* Report Summary */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-wrap justify-between gap-4 text-lg">
          <p>
            <strong>Title:</strong> Maize Footage 1
          </p>
          <p>
            <strong>Total Scan:</strong> 3
          </p>
          <p>
            <strong>Analyzation Date:</strong> 2025/12/12
          </p>
        </div>
      </div>

      {/* Growth Rate */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {/* <div className="bg-white p-5 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-4">Growth Rate</h4>
          <HumidityLineChart />
        </div> */}

        {/* Disease Detection */}
        <div className="bg-white p-5 rounded-lg shadow-md  md:w-[100%] ">
          <h4 className="text-xl font-semibold mb-4">Disease Detection</h4>
          <div className="mb-4">
            <select className="w-full border-2 border-gray-300 rounded-md px-3 py-2 text-gray-700">
              <option value="alpids">Alpids</option>
              <option value="bugs">Bugs</option>
            </select>
          </div>
          <HumidityLineChart />
        </div>

        {/* Pest Detection */}
        <div className="bg-white p-5 rounded-lg shadow-md  md:w-[100%]">
          <h4 className="text-xl font-semibold mb-4">Pest Detection</h4>
          <div className="mb-4">
            <select className="w-full border-2 border-gray-300 rounded-md px-3 py-2 text-gray-700">
              <option value="alpids">Alpids</option>
              <option value="bugs">Bugs</option>
            </select>
          </div>
          <HumidityLineChart />
        </div>
      </div>

      {/* Scan Details */}
      <div className="mt-10">
        <h4 className="text-2xl font-bold mb-6">Scan Details</h4>
        <Box>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange} centered>
                <Tab
                  label="First Scan"
                  value="1"
                  sx={{
                    fontSize: "16px",
                    textTransform: "none",
                    fontWeight: value === "1" ? "bold" : "normal",
                  }}
                />
                <Tab
                  label="Second Scan"
                  value="2"
                  sx={{
                    fontSize: "16px",
                    textTransform: "none",
                    fontWeight: value === "2" ? "bold" : "normal",
                  }}
                />
                <Tab
                  label="Third Scan"
                  value="3"
                  sx={{
                    fontSize: "16px",
                    textTransform: "none",
                    fontWeight: value === "3" ? "bold" : "normal",
                  }}
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <ScanDetails pop={pop} />
            </TabPanel>
            <TabPanel value="2">
              <ScanDetails />
            </TabPanel>
            <TabPanel value="3">
              <ScanDetails />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </section>
  );
};

// Scan Details Component
const ScanDetails = (props) => (
  <div>
    <h5 className="text-xl font-bold mb-4">Detected Pests</h5>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-red-200 h-40 rounded-lg">
        <video src={a} controls className="video-style">
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="col-span-2">
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Identified Pest</th>
              <th className="border border-gray-300 p-2">
                Detected Pest Count
              </th>
              <th className="border border-gray-300 p-2">Sample Image</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">1</td>
              <td className="border border-gray-300 p-2">Bemisia tabaci</td>
              <td className="border border-gray-300 p-2">4</td>
              <td className="border border-gray-300 p-2">
                <a
                  onClick={() => {
                    props.pop(true);
                  }}
                  target="_blank"
                  className="text-blue-500 underline"
                  rel="noopener noreferrer"
                >
                  img1
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="bg-white p-4 rounded-lg shadow-md mt-6">
      <h5 className="text-xl font-bold mb-4">Solution</h5>
      <ul className="list-disc ml-5 space-y-2 text-gray-700">
        <li>
          Use Imidacloprid, Buprofezin, or Spirotetramat for effective control;
          Neem Oil is a natural alternative for mild infestations.
        </li>
        <li>
          Follow label instructions for dosage and rotate pesticides to prevent
          resistance.
        </li>
        <li>
          Remove infested plant parts, ensure proper crop spacing, and introduce
          natural predators like Encarsia formosa.
        </li>
      </ul>
    </div>
  </div>
);

export default Reports;
