import Sidebar from "../components/Sidebar";
import { projectManagerMenu } from "../constants/sidebarMenus";

const ProjectManagerLayout = ({children}) => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar menuItems={projectManagerMenu} title="Project Manager Panel"/>
            <main className="flex-1 overflow-y-auto p-4">{children}</main>
        </div>
    )
}

export default ProjectManagerLayout;