import React, { useState } from "react";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import FileUploadContainer from "./fileUploadContainer";

import HeaderComponent from "../components/headerComponent";
import TabComponent from "../components/tabComponent";
import InfoCard from "../components/infoCardComponent";
import InfoAlert from "../components/infoAlertComponent";

const ContextContainer: React.FC = () => {
  const [isError, setIsError] = useState(false);
  return (
    <Container>
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
    </Container>
  );
};

export default ContextContainer;
