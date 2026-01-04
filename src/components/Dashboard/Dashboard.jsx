import React, { useState } from "react"
import ProfilePage from "./Profile/Profile"
import MyImports from "../MyImports/MyImports"
import MyExports from "../MyExports/MyExports"
// import Profile from "./Profile"
// import Orders from "./Orders"
// import Wishlist from "./Wishlist"
// import Settings from "./Settings"

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("profile")

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md p-6">
                <h2 className="text-xl font-bold mb-6">User Dashboard</h2>
                <ul className="space-y-3">
                    <li
                        className={`cursor-pointer ${activeTab === "profile" && "font-bold text-indigo-600"}`}
                        onClick={() => setActiveTab("profile")}
                    >
                        Profile
                    </li>
                    <li
                        className={`cursor-pointer ${activeTab === "orders" && "font-bold text-indigo-600"}`}
                        onClick={() => setActiveTab("exports")}
                    >
                        My Exports
                    </li>
                    <li
                        className={`cursor-pointer ${activeTab === "wishlist" && "font-bold text-indigo-600"}`}
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
                {activeTab === "exports" && <MyExports />}
                {activeTab === "settings" && <Settings />}
            </main>
        </div>
    )
}

export default Dashboard
