import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import FileUploadContainer from "./fileUploadContainer";

import HeaderComponent from "../components/headerComponent";
import TabComponent from "./tabContainer";
import InfoCard from "../components/infoCardComponent";
import InfoAlert from "../components/infoAlertComponent";
import Box from "@mui/material/Box";

const ContextContainer: React.FC = () => {
  const [isError, setIsError] = useState(false);
  return (
    <Box component="section">
      <HeaderComponent />

      <InfoCard
        organisation="Sinisa's company"
        submissionGroup="Test submission Group"
        entities="First entity"
        timePeriod="March"
        reportingYear={2024}
      />

      <InfoAlert />

      {isError && <Alert severity="error">This is an error Alert.</Alert>}
      <TabComponent />
      <FileUploadContainer />
    </Box>
  );
};

export default ContextContainer;
