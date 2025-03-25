import { Card, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import { useTaskContext } from "../utils/taskProvider";

function FileUploadComponent({ tabIndex }: { tabIndex: number }) {
  const taskContext = useTaskContext();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (taskContext) {
        acceptedFiles.forEach((file) => {
          taskContext.addFile(file, tabIndex);
          setSuccessMessage("File uploaded successfully");
          setTimeout(() => setSuccessMessage(null), 3000);
        });
      }
    },
    [taskContext, tabIndex]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const fileUploaded = taskContext
    ? taskContext.tabFiles.some((file) => file.tabIndex === tabIndex)
    : false;

  return (
    <div>
      <Card
        {...getRootProps()}
        sx={{
          textAlign: "center",
          padding: "20px",
          bgcolor: isDragActive ? "#f5f5f5" : "white",
        }}
      >
        <input {...getInputProps()} />
        <>
          {fileUploaded ? <CloudDoneIcon /> : <CloudUploadIcon />}
          {fileUploaded ? (
            <Typography variant="body1" color="text.primary">
              {
                taskContext?.tabFiles.find((file) => file.tabIndex === tabIndex)
                  ?.file.name
              }
            </Typography>
          ) : (
            <>
              <Typography variant="body1" color="text.primary">
                <Typography
                  component="span"
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                >
                  Click to upload
                </Typography>{" "}
                or drag and drop
              </Typography>
              <Typography variant="body2" color="text.primary">
                .csv, .doc, .docx, .eml, .gif, .jpg, .jpeg, .msg, .pdf, .png,
                .txt, .xls, .xlsx files
              </Typography>
            </>
          )}
        </>
      </Card>
      {successMessage && (
        <div style={{ color: "green", marginTop: "10px" }}>
          {successMessage}
        </div>
      )}
    </div>
  );
}

export default FileUploadComponent;
