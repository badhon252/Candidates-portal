import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      // Get prisma to fetch all posts
      const data = await prisma.user.findMany();
      console.log("Fetched posts:", data);
      return res.status(200).json(data);
    } else {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
    return res.status(500).json({ error: "Unable to fetch posts" });
  } finally {
    await prisma.$disconnect();
  }
}
