import { Outlet } from "react-router-dom";
import { CenteredPageTemplate, Typography } from '@task-manager/components';
import { TaskProvider } from "../components/TaskProvider";

const RootPage = () => {
  return (
    <TaskProvider>
      <CenteredPageTemplate 
        header={<Typography as="h1">Task manager</Typography>}
        footer={<Typography as="h3">Demo</Typography>}
      >
        <Outlet />
      </CenteredPageTemplate>
    </TaskProvider>
  );
};

export default RootPage;
