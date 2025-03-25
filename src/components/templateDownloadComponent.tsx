import { Alert, Button, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";

interface TemplateDownloadComponentProps {
  downloadLabel: string;
}

const TemplateDownloadComponent: React.FC<TemplateDownloadComponentProps> = ({
  downloadLabel,
}) => {
  const handleDownload = () => {
    // random data
    const data = [
      ["Name", "Age", "Email"],
      ["John Doe", "30", "john.doe@example.com"],
      ["Jane Smith", "25", "jane.smith@example.com"],
    ];

    let csvContent = "data:text/csv;charset=utf-8,";
    data.forEach((rowArray) => {
      let row = rowArray.join(",");
      csvContent += row + "\r\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "template.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Alert severity="info" icon={<SendIcon />} style={{ marginBottom: "16px" }}>
      <Typography variant="subtitle1" color="text.secondary">
        Submit data
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Download the template and input data against the appropriate column
        headers. You should then upload the filled-in csv file to submit the
        data.
      </Typography>
      <Button
        variant="contained"
        onClick={handleDownload}
        style={{ marginTop: "8px" }}
      >
        {downloadLabel}
      </Button>
    </Alert>
  );
};

export default TemplateDownloadComponent;
