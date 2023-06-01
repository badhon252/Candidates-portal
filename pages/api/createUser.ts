import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type UserProps = {
  name: string;
  email: string;
  occupation: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { name, email, occupation }: UserProps = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const createdUser = await prisma.user.create({
      data: {
        name,
        email,
        occupation,
      },
    });

    return res.status(201).json(createdUser);
  } catch (error) {
    console.error("Error creating a new user:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
