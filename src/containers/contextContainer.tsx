import React from "react";

import TabComponent from "./tabContainer";
import InfoCard from "../components/infoCardComponent";
import InfoAlert from "../components/infoAlertComponent";
import Box from "@mui/material/Box";
import ErrorAlert from "../components/errorAlertComponent";

const ContextContainer: React.FC = () => {
  return (
    <Box component="section">
      <InfoCard
        organisation="Sinisa's company"
        submissionGroup="Test submission Group"
        entities="First entity"
        timePeriod="March"
        reportingYear={2024}
      />

      <InfoAlert />
      <ErrorAlert />
      <TabComponent />
    </Box>
  );
};

export default ContextContainer;
