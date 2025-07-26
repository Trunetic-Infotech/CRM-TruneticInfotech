import { Navigate, Route, Routes } from "react-router-dom"
import ProjectManagerLayout from "../layouts/ProjectManagerLayout"
import ProjectManagerDashboard from "../pages/project-manager/projectManagerDashboard"
import MyProjects from "../pages/project-manager/MyProjects"
import CreateProject from "../pages/project-manager/CreateProject"
import Team from "../pages/project-manager/Team"
import Tasks from "../pages/project-manager/Tasks"
import Client from "../pages/project-manager/Client"
import LeaveApply from "../pages/hr/SubComponents/LeaveApply"
import LeaveStatus from './../pages/hr/SubComponents/LeaveStatus';
import AttendanceMark from './../pages/hr/SubComponents/AttendanceMark';
import AttendanceRecords from './../pages/hr/SubComponents/AttendanceRecords';



const ProjectManagerRoutes = () => {
    return (
        <ProjectManagerLayout>
            <Routes>
                <Route indexed element={<Navigate to="dashboard" />} />
                <Route path="dashboard" element={<ProjectManagerDashboard />}/>
                <Route path="projects/my-projects" element={<MyProjects />}/>
                <Route path="projects" element={<CreateProject />}/>
                <Route path="team" element={<Team />}/>
                <Route path="tasks" element={<Tasks />}/>
                <Route path="clients" element={<Client />}/>
                <Route path="Leave/mark" element={<LeaveApply />}/>
                <Route path="Leave/records" element={<LeaveStatus />}/>
                  <Route path="attendance/mark" element={<AttendanceMark />}/>
                    <Route path="attendance/records" element={<AttendanceRecords />}/>
                <Route path="*" element={<Navigate to="dashboard" />} />
            </Routes>
        </ProjectManagerLayout>
    )
}

export default ProjectManagerRoutes;