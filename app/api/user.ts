import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, occupation } = req.body;
    console.log(req.body);
    try {
      const createdUser = await prisma.user.create({
        data: {
          name,
          email,
          occupation,
        },
      });
      res.status(201).json(createdUser);
      console.log(createdUser);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Error creating user", details: error });
    }
  } else if (req.method === "DELETE") {
    const { id } = req.body;

    try {
      await prisma.user.delete({
        where: {
          id,
        },
      });
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ error: "Error deleting user" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
