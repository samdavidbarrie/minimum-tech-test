import { useState } from "react";
import { NotificationsProvider } from "@toolpad/core/useNotifications";
import ContextContainer from "./containers/contextContainer";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { PageContainer } from "@toolpad/core/PageContainer";
import { TaskContext } from "./utils/taskProvider";

function App() {
  const [files, setFiles] = useState<File[]>([]);

  const value = {
    files,
    setFiles,
  };

  return (
    <TaskContext.Provider value={value}>
      <NotificationsProvider>
        <PageContainer
          sx={{ height: "100vh", width: "100vw", background: "white" }}
        >
          <AppBar position="static" sx={{ width: "100%" }}>
            <Toolbar variant="regular" sx={{ justifyContent: "space-between" }}>
              <Typography variant="h6" color="inherit" component="div">
                Minimum Tech Test
              </Typography>
              <Button variant="contained">Submit</Button>
            </Toolbar>
          </AppBar>
          <ContextContainer />
        </PageContainer>
      </NotificationsProvider>
    </TaskContext.Provider>
  );
}

export default App;
