import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CloseIcon from "@mui/icons-material/Close";
import HumidityLineChart from "../components/HumidityLineChart";

const Reports = () => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const popOverRef = useRef();
  const controlPopover = (action) => {
    console.log(action);
    if (action) {
      popOverRef.current.style.display = "";
      return true;
    }
    popOverRef.current.style.display = "none";
  };

  return (
    <section className="min-h-screen bg-gray-100 p-5">
      <div
        ref={popOverRef}
        style={{ display: "none" }}
        className=" top-0 left-0 absolute w-full flex justify-center items-center h-[100vh]"
      >
        <div className="bg-red-500 w-[400px] h-[400px]">
          <div className="flex justify-end p-2">
            <button onClick={() => controlPopover(false)}>
              <CloseIcon sx={{ fontSize: "20px" }} />
            </button>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="mb-5">
        <Link
          to={"/processedVideo"}
          className="text-green-700 underline font-semibold hover:text-green-500"
        >
          &larr; Back
        </Link>
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
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-4">Growth Rate</h4>
          <HumidityLineChart />
        </div>

        {/* Disease Detection */}
        <div className="bg-white p-5 rounded-lg shadow-md">
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
        <div className="bg-white p-5 rounded-lg shadow-md">
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
            {value == 1 ? (
              <div>
                <h5 className="text-xl font-bold mb-4">Detected Pests</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-red-200 h-40 rounded-lg"></div>
                  <div className="col-span-2">
                    <table className="w-full border-collapse border border-gray-300 text-left">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-2">ID</th>
                          <th className="border border-gray-300 p-2">
                            Identified Pest
                          </th>
                          <th className="border border-gray-300 p-2">
                            Detected Pest Count
                          </th>
                          <th className="border border-gray-300 p-2">
                            Sample Image
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-2">1</td>
                          <td className="border border-gray-300 p-2">
                            Spider Mite
                          </td>
                          <td className="border border-gray-300 p-2">150</td>
                          <td className="border border-gray-300 p-2">
                            <button
                              onClick={() => controlPopover(true)}
                              href="sample-image.jpg"
                              target="_blank"
                              className="text-blue-500 underline"
                              rel="noopener noreferrer"
                            >
                              img1
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md mt-6">
                  <h5 className="text-xl font-bold mb-4">Solution</h5>
                  <ul className="list-disc ml-5 space-y-2 text-gray-700">
                    <li>Ensure crop rotation to minimize pest spread.</li>
                    <li>Apply organic pesticides as recommended.</li>
                    <li>Monitor regularly for new infestations.</li>
                  </ul>
                </div>
              </div>
            ) : value == 2 ? (
              <div>
                <h5 className="text-xl font-bold mb-4">Detected Pests</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-red-200 h-40 rounded-lg"></div>
                  <div className="col-span-2">
                    <table className="w-full border-collapse border border-gray-300 text-left">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-2">ID</th>
                          <th className="border border-gray-300 p-2">
                            Identified Pest
                          </th>
                          <th className="border border-gray-300 p-2">
                            Detected Pest Count
                          </th>
                          <th className="border border-gray-300 p-2">
                            Sample Image
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-2">1</td>
                          <td className="border border-gray-300 p-2">
                            Spider Mite
                          </td>
                          <td className="border border-gray-300 p-2">150</td>
                          <td className="border border-gray-300 p-2">
                            <button
                              onClick={() => controlPopover(true)}
                              href="sample-image.jpg"
                              target="_blank"
                              className="text-blue-500 underline"
                              rel="noopener noreferrer"
                            >
                              img2
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md mt-6">
                  <h5 className="text-xl font-bold mb-4">Solution</h5>
                  <ul className="list-disc ml-5 space-y-2 text-gray-700">
                    <li>Ensure crop rotation to minimize pest spread.</li>
                    <li>Apply organic pesticides as recommended.</li>
                    <li>Monitor regularly for new infestations.</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div>
                <h5 className="text-xl font-bold mb-4">Detected Pests</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-red-200 h-40 rounded-lg"></div>
                  <div className="col-span-2">
                    <table className="w-full border-collapse border border-gray-300 text-left">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-2">ID</th>
                          <th className="border border-gray-300 p-2">
                            Identified Pest
                          </th>
                          <th className="border border-gray-300 p-2">
                            Detected Pest Count
                          </th>
                          <th className="border border-gray-300 p-2">
                            Sample Image
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-2">1</td>
                          <td className="border border-gray-300 p-2">
                            Spider Mite
                          </td>
                          <td className="border border-gray-300 p-2">150</td>
                          <td className="border border-gray-300 p-2">
                            <button
                              onClick={() => controlPopover(true)}
                              href="sample-image.jpg"
                              target="_blank"
                              className="text-blue-500 underline"
                              rel="noopener noreferrer"
                            >
                              img3
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md mt-6">
                  <h5 className="text-xl font-bold mb-4">Solution</h5>
                  <ul className="list-disc ml-5 space-y-2 text-gray-700">
                    <li>Ensure crop rotation to minimize pest spread.</li>
                    <li>Apply organic pesticides as recommended.</li>
                    <li>Monitor regularly for new infestations.</li>
                  </ul>
                </div>
              </div>
            )}

            <div></div>
          </TabContext>
        </Box>
      </div>
    </section>
  );
};
export default Reports;
