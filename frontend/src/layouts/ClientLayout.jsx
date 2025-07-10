import Sidebar from "../components/Sidebar";
import { clientMenu } from "../constants/sidebarMenus";

const ClientLayout = ({children}) => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar menuItems={clientMenu} title="Client Panel"/>
            <main className="flex-1 overflow-y-auto p-4">{children}</main>
        </div>
    )
}

export default ClientLayout;