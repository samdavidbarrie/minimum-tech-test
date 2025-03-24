import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

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
    <Card>
      <CardContent>
        {[
          { label: "Organisation", value: organisation },
          { label: "Submission Group", value: submissionGroup },
          { label: "Entities", value: entities },
          { label: "Time Period", value: timePeriod },
          { label: "Reporting Year", value: reportingYear },
        ].map((item, index) => (
          <Typography key={index} variant="body2" color="text.secondary">
            {item.label}: {item.value}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default InfoCard;
