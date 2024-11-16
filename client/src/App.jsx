import React, { useRef } from 'react';
import oip from './assets/OIP.jpg';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProcessedVideo from './pages/ProcessedVideo';
import UploadVideo from './pages/UploadVideo';
import CloseIcon from '@mui/icons-material/Close';
import Reports from './pages/Reports';
import Header from './components/Header';

const App = () => {
  const location = useLocation();
  console.log(location);
  const sidebarRef = useRef();
  const controlSidebar = (action) => {
    if (action) {
      sidebarRef.current.style.left = '0px';
    } else {
      sidebarRef.current.style.left = '-300px';
    }
  };

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
              <li className=" flex items-center  cursor-pointer hover:text-white ps-5 font-semibold">
                <Link
                  to="/dashboard"
                  style={{
                    color:
                      location.pathname == '/dashboard' ? 'white' : ' #afaaaa' ,
                  }}
                >
                  {' '}
                  <DashboardIcon className="me-2" /> Dashboard
                </Link>
              </li>
              <hr className=" cursor-pointer mt-3 font-semibold  mx-3" />
              <li className=" flex items-center  hover:text-[#afaaaa] cursor-pointer mt-2 font-semibold ps-5">
                <Link
                  to="/uploadVideo"
                  style={{
                    color:
                      location.pathname == '/uploadVideo'
                        ? 'white' : ' #afaaaa',
                  }}
                >
                  {' '}
                  <CloudUploadIcon className="me-2" /> Upload
                </Link>{' '}
              </li>
              <li className=" mt-2 flex items-center  hover:text-[#afaaaa] cursor-pointer ps-5 font-semibold">
                <Link
                  to="/processedVideo"
                  style={{
                    color:
                      location.pathname == '/processedVideo'
                        ? 'white' : ' #afaaaa',
                  }}
                >
                  {' '}
                  <AnalyticsIcon className="me-2" /> Processed Video
                </Link>{' '}
              </li>
              <hr className="mt-2  mx-3" />
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
                <Route path="*" element={<Dashboard />}></Route>
                <Route path="/reports" element={<Reports />}></Route>
              </Routes>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
