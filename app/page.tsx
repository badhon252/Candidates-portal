"use client";
import { useEffect, useState } from "react";
import Form, { FormData } from "./components/Form";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
  occupation: string;
}

async function fetchUsers(): Promise<User[]> {
  try {
    const response = await axios.get("/api/getUsers");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

async function editUser(user: User) {
  try {
    await axios.put(`/api/editUser?id=${user.id}`, user);
  } catch (error) {
    console.error("Error editing user:", error);
  }
}

async function deleteUser(id: number) {
  try {
    await axios.delete(`/api/deleteUser?id=${id}`);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}

const Page = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editedUser, setEditedUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchUsers();
        console.log("Fetched users:", data);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchData();
  }, []);

  const handleDeleteUser = async (id: number) => {
    try {
      await deleteUser(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEditUser = (user: User) => {
    setEditedUser(user);
  };

  const handleSaveEdit = async (updatedUser: User) => {
    try {
      await editUser(updatedUser);
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        )
      );
      setEditedUser(null);
    } catch (error) {
      console.error("Error saving edit:", error);
    }
  };

  const handleFormSubmit = async (formData: FormData) => {
    try {
      const newUser: User = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        occupation: formData.occupation,
      };
      await axios.post("/api/createUser", newUser);
      setUsers((prevUsers) => [...prevUsers, newUser]);
      setEditedUser(null);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="container mx-auto min-h-screen">
      <h1 className="text-4xl text-center font-bold my-6">Users</h1>
      <p className="text-2xl text-center font-bold my-6 text-orange-500">
        Unique Email required!
      </p>
      <Form
        defaultValues={editedUser}
        onSubmit={handleFormSubmit}
        onCancel={() => setEditedUser(null)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="bg-gray-100 rounded-md p-4 shadow-md">
            <h3 className="text-xl font-bold">{user.name}</h3>
            <p className="text-gray-700">{user.email}</p>
            <p className="text-gray-700">{user.occupation}</p>
            <button
              onClick={() => handleDeleteUser(user.id)}
              className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md"
            >
              Delete
            </button>
            <button
              onClick={() => handleEditUser(user)}
              className="bg-green-500 text-white px-4 py-2 mx-5 mt-4 rounded-md"
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      {editedUser && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Edit User</h2>

            <Form
              defaultValues={editedUser}
              onSubmit={handleSaveEdit}
              onCancel={() => setEditedUser(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
