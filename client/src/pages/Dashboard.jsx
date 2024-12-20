import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import GaugeChart from "../components/GaugeChart";
import TemperatureLineChart from "../components/TempreatureLineChart";
import HumidityLineChart from "../components/HumidityLineChart";
import { motion, useInView } from "framer-motion";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Dashboard = (props) => {
  const soilMoisture = "50%";
  const [recommendations, setRecommendations] = useState([
    "Compost: Improves soil structure, retains moisture, and provides essential nutrients for winter crops.",
    "Crop Rotation: Avoid planting the same crop repeatedly to reduce pest infestations and nutrient depletion.",
    "Mulching: Prevents moisture loss, controls weeds, and keeps the soil temperature stable.",
  ]);
  const getGeminiData = async () => {
    const genAI = new GoogleGenerativeAI("");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Give maximum 3 recommendation in short bullets to my plants on the basis of following data:
Soil Moisture is ${soilMoisture} and suggest me disease control measures for pests. Make sure not to show exact soil moisture data. Also, dont do ** in points and no need to add * before points.`;

    const result = await model.generateContent(prompt);
    setRecommendations(result.response.text().split("\n").filter(Boolean));
    console.log(result.response.text());
  };

  useEffect(() => {
    // Initial fetch
    getGeminiData();
  }, []);

  // Ref for the recommendation section
  const recommendationRef = React.useRef(null);

  const isInView = useInView(recommendationRef, { once: true });

  return (
    <Box className="bg-gray-50 min-h-screen rounded-md p-5 md:p-10">
      {/* Top Stats Section */}
      <Box className="border border-gray-200 rounded-lg shadow-sm p-5 mb-10">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card className="shadow-lg rounded-lg">
              <CardContent className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg p-5">
                <Typography variant="h6" className="text-center font-semibold">
                  Total Videos
                </Typography>
                <Typography variant="h3" className="text-center font-bold mt-2">
                  2
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="shadow-lg rounded-lg">
              <CardContent>
                <Typography variant="h6" className="font-bold pb-2">
                  Soil Moisture:
                </Typography>
                <GaugeChart />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Charts Section */}
      <Box className="border border-gray-200 rounded-lg shadow-sm p-5 mb-10">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card className="shadow-lg rounded-lg">
              <CardContent>
                <Typography variant="h6" className="font-bold pb-2">
                  Temperature Chart:
                </Typography>
                <TemperatureLineChart />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="shadow-lg rounded-lg">
              <CardContent>
                <Typography variant="h6" className="font-bold pb-2">
                  Humidity Chart:
                </Typography>
                <HumidityLineChart />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Recommendations Section */}
      <Box
        className="border border-gray-200 shadow-sm p-5"
        ref={recommendationRef}
      >
        <Card className="shadow-lg rounded-lg">
          <CardContent>
            <Typography variant="h5" className="font-bold mb-4">
              Recommendations:
            </Typography>
            <Box className="space-y-3">
              {recommendations.map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.8,
                  }}
                >
                  <Typography
                    variant="body1"
                    className="text-lg p-3 rounded-md bg-gray-50 hover:bg-gray-100 transition duration-300 shadow-sm"
                  >
                    {index + 1}. {text}
                  </Typography>
                </motion.div>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Dashboard;
