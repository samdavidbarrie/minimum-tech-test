import Alert from "@mui/material/Alert";
import { useTaskContext } from "../utils/taskProvider";

const ErrorAlert = () => {
  const taskContext = useTaskContext();
  const error = taskContext ? taskContext.error : null;
  return <>{error && <Alert severity="error">{error}</Alert>}</>;
};
export default ErrorAlert;
