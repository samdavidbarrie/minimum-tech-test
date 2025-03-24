import { Card, Typography } from "@mui/material";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function FileUploadComponent() {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Card
      {...getRootProps()}
      style={{
        textAlign: "center",
        padding: "20px",
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <>
          <CloudUploadIcon />
          <Typography variant="body1" color="text.primary">
            <Typography
              component="span"
              color="primary"
              style={{ fontWeight: "bold" }}
            >
              Click to upload
            </Typography>{" "}
            or drag and drop
          </Typography>
          <Typography variant="body2" color="text.primary">
            .csv, .doc, .docx, .eml, .gif, .jpg, .jpeg, .msg, .pdf, .png, .txt,
            .xls, .xlsx files
          </Typography>
        </>
      )}
    </Card>
  );
}

export default FileUploadComponent;
