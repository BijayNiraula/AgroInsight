import React, { useEffect, useState, useRef } from "react";
import oip from "./assets/OIP.jpg";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProcessedVideo from "./pages/ProcessedVideo";
import UploadVideo from "./pages/UploadVideo";
import CloseIcon from "@mui/icons-material/Close";
import Reports from "./pages/Reports";
import Header from "./components/Header";
import HelpIcon from "@mui/icons-material/Help";
import { useDispatch, useSelector } from "react-redux";
import Howtouse from "./pages/Howtouse";
import { setLocation, setUserData } from "./redux/slices/global.slices";

const App = () => {
  console.log(useSelector((state) => state));
  const location = useLocation();
  const [temperature, setTemperature] = useState([]);
  const sidebarRef = useRef();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.global.status);
  const controlSidebar = (action) => {
    if (action) {
      sidebarRef.current.style.left = "0px";
    } else {
      sidebarRef.current.style.left = "-300px";
    }
  };

  const getCurrentLocation = async () => {
    // Check if geolocation is available in the browser
    if ("geolocation" in navigator) {
      // Request the current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Success callback
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          dispatch(setLocation({ latitude, longitude }));
          getWeatherData(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error.message);
          alert("could not get the user location");
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const getUserDetail = async () => {
    const response = await fetch(`http://localhost:3000/api/user/getUserData`, {
      method: "post",
    });
    const data = await response.json();
    dispatch(setUserData(data));
  };

  const getWeatherData = async (lat, lon) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=896cbd13f7a4b558477ffd686788759b`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setTemperature(data.main.temp);
    getUserDetail();
  };
  useEffect(async () => {
    await getCurrentLocation();
  }, []);

  const closeSidebar = () => controlSidebar(false);

  if (status == "loading") {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          {/* Spinner */}
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-70"></div>
          {/* Loading Text */}
          <p className="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header controlSidebar={controlSidebar} />
      <div className="flex h-[90vh] ">
        <section
          ref={sidebarRef}
          className=" p-0 absolute left-[0px] border transition-all delay-100 sm:static w-8/12 border-black z-20 sm:flex sm:w-2/12 bg-gradient-to-b from-black to-gray-900 h-[100%]"
        >
          <div className="flex justify-end sm:hidden">
            <button onClick={() => controlSidebar(false)}>
              <CloseIcon className="text-white m-2" />
            </button>
          </div>
          <div>
            <ul className="  text-[#afaaaa]  md:mt-3 justify-center text-[18px]">
              <li
                onClick={closeSidebar}
                className=" flex items-center   cursor-pointer hover:text-white ps-5 font-semibold"
              >
                <Link
                  to="/dashboard"
                  style={{
                    color:
                      location.pathname == "/dashboard" ? "white" : " #afaaaa",
                  }}
                >
                  {" "}
                  <DashboardIcon className="me-2" /> Dashboard
                </Link>
              </li>
              <hr className=" cursor-pointer mt-3 font-semibold  mx-3" />
              <li
                onClick={closeSidebar}
                className=" flex items-center  hover:text-[#afaaaa] cursor-pointer mt-2 font-semibold ps-5"
              >
                <Link
                  to="/uploadVideo"
                  style={{
                    color:
                      location.pathname == "/uploadVideo"
                        ? "white"
                        : " #afaaaa",
                  }}
                >
                  {" "}
                  <CloudUploadIcon className="me-2" /> Upload
                </Link>{" "}
              </li>
              <li
                onClick={closeSidebar}
                className=" mt-2 flex items-center  hover:text-[#afaaaa] cursor-pointer ps-5 font-semibold"
              >
                <Link
                  to="/processedVideo"
                  style={{
                    color:
                      location.pathname == "/processedVideo"
                        ? "white"
                        : " #afaaaa",
                  }}
                >
                  {" "}
                  <AnalyticsIcon className="me-2" /> Processed Video
                </Link>{" "}
              </li>
              <hr className="mt-2  mx-3" />
              <li className=" mt-2 flex items-center  hover:text-[#afaaaa] cursor-pointer ps-5 font-semibold">
                <Link
                  to="/Howtouse"
                  style={{
                    color:
                      location.pathname == "/Howtouse" ? "white" : " #afaaaa",
                  }}
                >
                  {" "}
                  <HelpIcon className="me-2" /> How to Use
                </Link>{" "}
              </li>
            </ul>
          </div>
        </section>
        <section className=" w-full md:w-10/12 h-[100%]">
          <div className="h-[100%]  md:p-5">
            <div className=" h-[100%] overflow-scroll py-5 px-3 md:p-7   bg-[#E2DBDB]">
              <Routes>
                <Route path="/uploadVideo" element={<UploadVideo />}></Route>
                <Route
                  path="/processedVideo"
                  element={<ProcessedVideo />}
                ></Route>
                <Route
                  path="*"
                  element={<Dashboard temp={temperature} />}
                ></Route>
                <Route path="/reports" element={<Reports />}></Route>
                <Route path="/Howtouse" element={<Howtouse />}></Route>
              </Routes>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
