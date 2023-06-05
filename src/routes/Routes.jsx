import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddTask from "../pages/AddTask";
import AllTasks from "../pages/AllTasks";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'add-a-task',
                element: <AddTask />
            },
            {
                path: 'all-tasks',
                element: <AllTasks />
            }
        ]
    }
])
export default router;