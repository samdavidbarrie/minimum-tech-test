import { NotificationsProvider } from "@toolpad/core/useNotifications";
import ContextContainer from "./containers/contextContainer";
import { PageContainer } from "@toolpad/core/PageContainer";
import { TaskProvider } from "./utils/taskProvider";
import HeaderComponent from "./components/headerComponent";

function App() {
  return (
    <TaskProvider>
      <NotificationsProvider>
        <PageContainer
          sx={{ height: "100vh", width: "100vw", background: "white" }}
        >
          <HeaderComponent />
          <ContextContainer />
        </PageContainer>
      </NotificationsProvider>
    </TaskProvider>
  );
}

export default App;
