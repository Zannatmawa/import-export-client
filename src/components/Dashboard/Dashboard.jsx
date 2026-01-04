import React, { useState } from "react"
import ProfilePage from "./Profile/Profile"
import MyImports from "../MyImports/MyImports"
// import MyExports from "../MyExports/MyExports"
import { Link } from "react-router"
// import { ship } from '../../assets/Ship.gif'


const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("profile")

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md p-6">
                <Link to="/" className="btn btn-ghost text-xl">
                    {/* <image src={ship} alt="logo" className="w-10 h-10 mr-2" />  */}
                    Import Export Hub
                </Link>
                <h2 className="text-xl font-bold mb-6">User Dashboard</h2>
                <ul className="space-y-3">
                    <li
                        className={`cursor-pointer ${activeTab === "profile" && "font-bold text-indigo-600"}`}
                        onClick={() => setActiveTab("home")}
                    >
                        Home
                    </li>
                    <li
                        className={`cursor-pointer ${activeTab === "profile" && "font-bold text-indigo-600"}`}
                        onClick={() => setActiveTab("profile")}
                    >
                        Profile
                    </li>
                    <li
                        className={`cursor-pointer ${activeTab === "exports" && "font-bold text-indigo-600"}`}
                        onClick={() => setActiveTab("exports")}
                    >
                        My Exports
                    </li>
                    <li
                        className={`cursor-pointer ${activeTab === "imports" && "font-bold text-indigo-600"}`}
                        onClick={() => setActiveTab("imports")}
                    >
                        My Imports
                    </li>
                    <li
                        className={`cursor-pointer ${activeTab === "settings" && "font-bold text-indigo-600"}`}
                        onClick={() => setActiveTab("settings")}
                    >
                        Settings
                    </li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                {activeTab === "profile" && <ProfilePage />}
                {activeTab === "imports" && <MyImports />}
                {activeTab === "home" && <HomePage />}
                {/* {activeTab === "exports" && <MyExports />} */}
                {activeTab === "settings" && <Settings />}
            </main>
        </div>
    )
}

export default Dashboard
