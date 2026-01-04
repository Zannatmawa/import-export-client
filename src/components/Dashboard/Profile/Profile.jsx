import React, { use, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const ProfilePage = ({ userData }) => {
    const { user } = use(AuthContext)

    const [profile, setProfile] = useState({
        name: userData?.name || "",
        email: userData?.email || "",
        phone: userData?.phone || "",
        address: userData?.address || "",
    })
    const [editing, setEditing] = useState(false)

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value })
    }

    const handleSave = () => {
        setEditing(false)
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-8">
                    <div className="w-24 h-24 rounded-full overflow-hidden mr-6">
                        <img src={user?.photoURL} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">{profile.name}</h2>
                        <p className="text-gray-600">{profile.email}</p>
                    </div>
                    <button
                        onClick={() => setEditing(!editing)}
                        className="ml-auto bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                    >
                        {editing ? "Cancel" : "Edit"}
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={user?.displayName}
                            onChange={handleChange}
                            readOnly={!editing}
                            className={`w-full border rounded px-3 py-2 ${editing ? "border-indigo-600" : "border-gray-300 bg-gray-100"
                                }`}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={user?.email}
                            onChange={handleChange}
                            readOnly={!editing}
                            className={`w-full border rounded px-3 py-2 ${editing ? "border-indigo-600" : "border-gray-300 bg-gray-100"
                                }`}
                        />
                    </div>

                </div>

                {editing && (
                    <div className="mt-6">
                        <button
                            onClick={handleSave}
                            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                        >
                            Save Changes
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProfilePage
