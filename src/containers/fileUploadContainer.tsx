import React, { useState } from "react";
import FileUploadComponent from "../components/fileUploadComponent";

const FileUploadContainer: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>("");

  return (
    <>
      <FileUploadComponent />
    </>
  );
};

export default FileUploadContainer;
