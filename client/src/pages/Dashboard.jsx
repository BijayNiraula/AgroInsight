import React from "react";
import GaugeChart from "../components/GaugeChart";
import TemperatureLineChart from "../components/TempreatureLineChart";
import HumidityLineChart from "../components/HumidityLineChart";

const Dashboard = () => {
  return (
    <section className="">
      <div className="flex ">
        <div className="w-5/12">
          <div className="bg-[#28b336] p-5 px-10 w-[250px]  shadow-lg text-white h-[100px]">
            <p className="flex justify-center font-semibold">Total Video</p>
            <p className="text-3xl font-bold flex justify-center">10</p>
          </div>
        </div>
        <div className="w-1/12"></div>
        <div className="w-5/12">
          <div className=" ">
            <p className="font-bold pb-2  text-xl">Soil Moisture : </p>
            <div className="ms-5">
              <GaugeChart />
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-5/12">
          <p className="font-bold   text-xl">Tempreature Chart : </p>
          <div className="ms-1 mt-2">
            <TemperatureLineChart />
          </div>
        </div>
        <div className="w-1/12"></div>
        <div className="w-5/12">
          <p className="font-bold p  text-xl">Humidity Chart : </p>
          <div className="ms-1 mt-2">
            <HumidityLineChart />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="bg-white p-5">
          <p className="font-bold text-2xl ">Recomendation :</p>
          <p className="mt-4 my-3 text-xl">
            1. Compost: Improves soil structure, retains moisture, and provides
            essential nutrients for winter crops.
          </p>
          <p className="mt-4 my-3 text-xl">
            2. Compost: Improves soil structure, retains moisture, and provides
            essential nutrients for winter crops.
          </p>
          <p className="mt-4 my-3 text-xl">
            3. Compost: Improves soil structure, retains moisture, and provides
            essential nutrients for winter crops.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
