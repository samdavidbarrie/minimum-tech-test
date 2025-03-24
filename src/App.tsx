import { useState } from "react";
import { NotificationsProvider } from "@toolpad/core/useNotifications";
import ContextContainer from "./containers/contextContainer";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
} from "@mui/material";
import { PageContainer } from "@toolpad/core/PageContainer";

function App() {
  const [count, setCount] = useState(0);

  // this needs to have context

  return (
    <>
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
    </>
  );
}

export default App;
