import { Toolbar, Typography, Button, AppBar } from "@mui/material";
import { useTaskContext } from "../utils/taskProvider";

function HeaderComponent() {
  const taskContext = useTaskContext();
  const tabFiles = taskContext ? taskContext.tabFiles : [];

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
                console.log("Submitted successfully!");
              }
            }}
          >
            submit
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderComponent;
