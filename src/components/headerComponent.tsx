import { Toolbar, Typography, Button } from "@mui/material";

function HeaderComponent() {
  return (
    <Toolbar variant="regular" sx={{ justifyContent: "space-between" }}>
      <Typography variant="h6" color="text.primary" component="div">
        Pending: Cleaning task
      </Typography>
      <div>
        <Button variant="text">exit</Button>
        <Button variant="contained">auto-process</Button>
      </div>
    </Toolbar>
  );
}

export default HeaderComponent;
