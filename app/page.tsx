"use client";

import { useEffect, useState } from "react";
import Form from "./components/Form";
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

async function deleteUser(id: number) {
  try {
    await axios.delete(`/api/deleteUser?id=${id}`);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}

const Page = () => {
  const [users, setUsers] = useState<User[]>([]);

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
    await deleteUser(id);
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center font-bold my-6">Users</h1>
      <Form />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="bg-gray-100 rounded-md p-4 shadow-md">
            <h3 className="text-xl font-bold">{user.name}</h3>
            <p className="text-gray-700">Email: {user.email}</p>
            <p className="text-gray-700">Occupation: {user.occupation}</p>
            <button
              onClick={() => handleDeleteUser(user.id)}
              className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
