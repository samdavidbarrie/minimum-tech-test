import React from "react";
import { Box, CardContent, Typography } from "@mui/material";

interface InfoCardProps {
  organisation: string;
  submissionGroup: string;
  entities: string;
  timePeriod: string;
  reportingYear: number;
}

const InfoCard: React.FC<InfoCardProps> = ({
  organisation,
  submissionGroup,
  entities,
  timePeriod,
  reportingYear,
}) => {
  return (
    <Box>
      <CardContent>
        {[
          { label: "Organisation", value: organisation },
          { label: "Submission Group", value: submissionGroup },
          { label: "Entities", value: entities },
          { label: "Time Period", value: timePeriod },
          { label: "Reporting Year", value: reportingYear },
        ].map((item, index) => (
          <Typography key={index} variant="body2" color="text.secondary">
            {item.label}:{" "}
            <Typography
              component="span"
              color="text.primary"
              sx={{ fontWeight: "bold" }}
            >
              {item.value}
            </Typography>
          </Typography>
        ))}
      </CardContent>
    </Box>
  );
};

export default InfoCard;
