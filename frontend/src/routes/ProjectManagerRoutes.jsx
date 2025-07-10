import { Navigate, Route, Routes } from "react-router-dom"
import ProjectManagerLayout from "../layouts/ProjectManagerLayout"
import ProjectManagerDashboard from "../pages/project-manager/projectManagerDashboard"
import MyProjects from "../pages/project-manager/MyProjects"
import CreateProject from "../pages/project-manager/CreateProject"
import Team from "../pages/project-manager/Team"
import Tasks from "../pages/project-manager/Tasks"



const ProjectManagerRoutes = () => {
    return (
        <ProjectManagerLayout>
            <Routes>
                <Route indexed element={<Navigate to="dashboard" />} />
                <Route path="dashboard" element={<ProjectManagerDashboard />}/>
                <Route path="projects/my-projects" element={<MyProjects />}/>
                <Route path="projects/create-project" element={<CreateProject />}/>
                <Route path="projects/team" element={<Team />}/>
                <Route path="projects/tasks" element={<Tasks />}/>
            </Routes>
        </ProjectManagerLayout>
    )
}

export default ProjectManagerRoutes;