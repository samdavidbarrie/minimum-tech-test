import {
  Toolbar,
  Typography,
  Button,
  AppBar,
  Alert,
  Snackbar,
} from "@mui/material";
import { useTaskContext } from "../utils/taskProvider";
import { useState } from "react";

function HeaderComponent() {
  const taskContext = useTaskContext();
  const tabFiles = taskContext ? taskContext.tabFiles : [];
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  return (
    <AppBar position="static" sx={{ width: "100%" }}>
      <Toolbar
        variant="regular"
        sx={{ justifyContent: "space-between", bgcolor: "white" }}
      >
        <Typography variant="h6" color="text.primary" component="div">
          Pending: Cleaning task
        </Typography>
        <div>
          <Button
            variant="text"
            onClick={() => taskContext && taskContext.setTabFiles([])}
          >
            exit
          </Button>
          <Button
            variant="contained"
            disabled={tabFiles.length === 0}
            onClick={() => {
              if (taskContext) {
                taskContext.setTabFiles([]);
                setSuccessMessage("Task submitted successfully!");
              }
            }}
          >
            submit
          </Button>
        </div>
      </Toolbar>
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
    </AppBar>
  );
}

export default HeaderComponent;
