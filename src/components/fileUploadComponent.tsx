import { Card, Typography, Snackbar, Alert } from "@mui/material";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import { useTaskContext } from "../utils/taskProvider";

const allowedFileTypes = [
  ".csv",
  ".doc",
  ".docx",
  ".eml",
  ".gif",
  ".jpg",
  ".jpeg",
  ".msg",
  ".pdf",
  ".png",
  ".txt",
  ".xls",
  ".xlsx",
];

function FileUploadComponent({ tabIndex }: { tabIndex: number }) {
  const taskContext = useTaskContext();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (taskContext) {
        acceptedFiles.forEach((file) => {
          const fileExtension = file.name
            .slice(file.name.lastIndexOf("."))
            .toLowerCase();
          if (allowedFileTypes.includes(fileExtension)) {
            taskContext.addFile(file, tabIndex);
            setSuccessMessage("File uploaded successfully");
            setTimeout(() => setSuccessMessage(null), 3000);
          } else {
            taskContext.setError(
              "Invalid file type. Please upload a valid file."
            );
          }
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
                {allowedFileTypes.join(", ")} files
              </Typography>
            </>
          )}
        </>
      </Card>
      <Snackbar
        open={!!successMessage}
        autoHideDuration={3000}
        onClose={() => setSuccessMessage(null)}
      >
        <Alert
          onClose={() => setSuccessMessage(null)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {successMessage}
        </Alert>
      </Snackbar>
      {taskContext && (
        <Snackbar
          open={!!taskContext.error}
          autoHideDuration={6000}
          onClose={() => taskContext.setError(null)}
        >
          <Alert
            onClose={() => taskContext.setError(null)}
            severity="error"
            sx={{ width: "100%" }}
          >
            {taskContext.error}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
}

export default FileUploadComponent;
