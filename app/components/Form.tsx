import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");

    if (!name || !email || !occupation) {
      alert("Please fill out all fields");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email address");
    } else if (occupation.length < 3) {
      alert("Please enter a valid occupation");
    } else if (name.length < 3) {
      alert("Please enter a valid name");
    } else {
      try {
        const response = await axios.post("/api/createUser", {
          name,
          email,
          occupation,
        });
        console.log("Created user:", response.data);
        // Reset form fields
        setName("");
        setEmail("");
        setOccupation("");
      } catch (error) {
        console.error("Error creating user:", error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex mx-auto flex-col md:w-1/3 lg:w-1/4 xsm:w-1/2 w-80"
    >
      <input
        type="text"
        className="bg-gray-300 my-3  text-gray-900 rounded-md py-3 px-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        className="bg-gray-300 my-3 py-3 px-2 text-gray-900 rounded-md"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        className="bg-gray-300 my-3 py-3 px-2 text-gray-900 rounded-md"
        value={occupation}
        onChange={(e) => setOccupation(e.target.value)}
        placeholder="Occupation"
      />
      <button
        type="submit"
        className="bg-green-400 my-3 py-3 px-2 text-gray-900 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
