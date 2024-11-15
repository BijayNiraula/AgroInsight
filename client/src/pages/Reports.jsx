import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import HumidityLineChart from "../components/HumidityLineChart";
const Reports = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section>
      <div>
        <Link to={"/processedVideo"}> Back</Link>
      </div>
      <h3 className="flex justify-center text-2xl font-bold mt-2"> Reports</h3>
      <hr className="text-[black] bg-[black]  border-[1px] mt-2 border-[black]" />
      <div className="mt-5">
        <div className="flex text-md ">
          <p className="font-bold me-2">Title :</p> <p>Maize Photage 1</p>
        </div>
        <div className="flex text-md mt-2">
          <p className="font-bold me-2">Total Scan :</p> <p>3</p>
        </div>
        <div className="flex text-md mt-2 ">
          <p className="font-bold me-2">Analyze Date :</p> <p>2025/12/12</p>
        </div>
        <div className="flex mt-10">
          {" "}
          <div className="w-5/12">
            <div className="flex justify-between">
              <p className="font-bold   text-xl">Growth Rate : </p>
            </div>
            <div className="ms-1 mt-2">
              <HumidityLineChart />
            </div>
          </div>
        </div>
        <div className="flex mt-10">
          <div className="w-5/12">
            <div className="flex justify-between">
              <p className="font-bold   text-xl">Disease Detection : </p>
              <div className="w-3/12 flex-shrink-0 ">
                <div>
                  <select
                    id="type"
                    className=" w-[100%] bg-transparent  border-[black] border-[2px] px-3 "
                  >
                    <option value="first" selected>
                      Alpids
                    </option>
                    <option value="second">Bugs</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="ms-1 mt-2">
              <HumidityLineChart />
            </div>
          </div>
          <div className="w-1/12"></div>
          <div className="w-5/12">
            <div className="flex justify-between">
              <p className="font-bold   text-xl">Pest Detection : </p>
              <div className="w-3/12 flex-shrink-0 ">
                <div>
                  <select
                    id="type"
                    className=" w-[100%] bg-transparent  border-[black] border-[2px] px-3 "
                  >
                    <option value="first" selected>
                      Alpids
                    </option>
                    <option value="second">Bugs</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="ms-1 mt-2">
              <HumidityLineChart />
            </div>
          </div>
        </div>
        <div className="mt-10">
          {" "}
          <p className="font-bold text-2xl">Scan Details :</p>
          <Box sx={{ width: "100%", typography: "body1", marginTop: "20px" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  TabIndicatorProps={{
                    style: { backgroundColor: "darkgreen" }, // Active tab indicator color
                  }}
                >
                  <Tab
                    label="First Scan"
                    sx={{
                      fontSize: "18px",
                      color: value === "2" ? "darkgreen" : "green",
                      fontWeight: "bold", // Active and inactive text color
                    }}
                    value="1"
                  />
                  <Tab
                    label="Second Scan"
                    sx={{
                      fontSize: "18px",
                      color: value === "2" ? "darkgreen" : "green",
                      fontWeight: "bold", // Active and inactive text color
                    }}
                    value="2"
                  />
                  <Tab
                    label="Third Scan"
                    sx={{
                      fontSize: "18px",
                      color: value === "2" ? "darkgreen" : "green",
                      fontWeight: "bold", // Active and inactive text color
                    }}
                    value="3"
                  />
                </TabList>
              </Box>
            </TabContext>
          </Box>
          <div className="mt-5">
            <p className="text-2xl font-bold">1 First Scan</p>

            <div className="mt-10">
              <p className="text-xl font-bold"># Detected Pest</p>
              <div className="flex mt-5 justify-between">
                <div className="w-4/12 bg-[#ee9d9d] h-[200px]"></div>
                <div className="w-7/12">
                  {" "}
                  <table
                    style={{
                      width: "100%",
                      textAlign: "left",
                      borderCollapse: "collapse",
                    }}
                  >
                    <thead>
                      <tr>
                        <th
                          style={{ border: "1px solid black", padding: "10px" }}
                        >
                          ID
                        </th>
                        <th
                          style={{ border: "1px solid black", padding: "10px" }}
                        >
                          Identified Pest
                        </th>
                        <th
                          style={{ border: "1px solid black", padding: "10px" }}
                        >
                          Detected Pest Count
                        </th>
                        <th
                          style={{ border: "1px solid black", padding: "10px" }}
                        >
                          Pest Sample Image
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          style={{ border: "1px solid black", padding: "10px" }}
                        >
                          1
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "10px" }}
                        >
                          Spider Mite
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "10px" }}
                        >
                          150
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "10px" }}
                        >
                          <a
                            href="sample-image.jpg"
                            target="_blank"
                            className=" underline text-blue-700 "
                            rel="noopener noreferrer"
                          >
                            img1
                          </a>
                          ,
                          <a
                            href="sample-image.jpg"
                            className=" underline text-blue-700 ms-2"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            img1
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ border: "1px solid black", padding: "10px" }}
                        >
                          2
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "10px" }}
                        >
                          Aphid
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "10px" }}
                        >
                          75
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "10px" }}
                        >
                          <a
                            href="sample-image.jpg"
                            target="_blank"
                            className=" underline text-blue-700 "
                            rel="noopener noreferrer"
                          >
                            img1
                          </a>
                          ,
                          <a
                            href="sample-image.jpg"
                            className=" underline text-blue-700 ms-2"
                            target="_blank"
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
              <div className="bg-white py-4 mt-3 px-2 flex ">
                <p className="font-bold text-xl w-2/12">Solution : </p>
                <div className="w-10/12 ">
                  <p className="mt-3 font-semibold">
                    1. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nam, hic? Molestias amet ducimus, libero hic eligendi
                    molestiae reiciendis eaque expedita!
                  </p>
                  <p className="mt-3 font-semibold">
                    2. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nam, hic? Molestias amet ducimus, libero hic eligendi
                    molestiae reiciendis eaque expedita!
                  </p>
                  <p className="mt-3 font-semibold">
                    3. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nam, hic? Molestias amet ducimus, libero hic eligendi
                    molestiae reiciendis eaque expedita!
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-xl font-bold"># Detected Pest</p>
              <div className="flex mt-5 justify-between">
                <div className="w-4/12 bg-[#ee9d9d] h-[200px]"></div>
                <div className="w-7/12">
                  {" "}
                  <table
                    style={{
                      width: "100%",
                      textAlign: "left",
                      borderCollapse: "collapse",
                    }}
                  >
                    <thead>
                      <tr>
                        <th
                          style={{ border: "1px solid black", padding: "10px" }}
                        >
                          ID
                        </th>
                        <th
                          style={{ border: "1px solid black", padding: "10px" }}
                        >
                          Identified Pest
                        </th>
                        <th
                          style={{ border: "1px solid black", padding: "10px" }}
                        >
                          Detected Pest Count
                        </th>
                        <th
                          style={{ border: "1px solid black", padding: "10px" }}
                        >
                          Pest Sample Image
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          style={{ border: "1px solid black", padding: "10px" }}
                        >
                          1
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "10px" }}
                        >
                          Spider Mite
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "10px" }}
                        >
                          150
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "10px" }}
                        >
                          <a
                            href="sample-image.jpg"
                            target="_blank"
                            className=" underline text-blue-700 "
                            rel="noopener noreferrer"
                          >
                            img1
                          </a>
                          ,
                          <a
                            href="sample-image.jpg"
                            className=" underline text-blue-700 ms-2"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            img1
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ border: "1px solid black", padding: "10px" }}
                        >
                          2
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "10px" }}
                        >
                          Aphid
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "10px" }}
                        >
                          75
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "10px" }}
                        >
                          <a
                            href="sample-image.jpg"
                            target="_blank"
                            className=" underline text-blue-700 "
                            rel="noopener noreferrer"
                          >
                            img1
                          </a>
                          ,
                          <a
                            href="sample-image.jpg"
                            className=" underline text-blue-700 ms-2"
                            target="_blank"
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
              <div className="bg-white py-4 mt-3 px-2 flex ">
                <p className="font-bold text-xl w-2/12">Solution : </p>
                <div className="w-10/12 ">
                  <p className="mt-3 font-semibold">
                    1. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nam, hic? Molestias amet ducimus, libero hic eligendi
                    molestiae reiciendis eaque expedita!
                  </p>
                  <p className="mt-3 font-semibold">
                    2. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nam, hic? Molestias amet ducimus, libero hic eligendi
                    molestiae reiciendis eaque expedita!
                  </p>
                  <p className="mt-3 font-semibold">
                    3. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nam, hic? Molestias amet ducimus, libero hic eligendi
                    molestiae reiciendis eaque expedita!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reports;
