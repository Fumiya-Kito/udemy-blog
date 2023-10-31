import { ResponseError, MessageResponse } from "@/types";
import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";





async function handler(req: NextApiRequest, res: NextApiResponse<MessageResponse>) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "InValid input." });
      return;
    }
    
    // send it in a DB
    const newMessage: MessageResponse["body"] = {
      email,
      name,
      message,
    };
    
    let client: MongoClient;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://kit-23:UzpA57e9wnJ1LEjq@cluster0.7ehjbxn.mongodb.net/udemy-blog?retryWrites=true&w=majority"
        );
      } catch (err) {
        if (err instanceof ResponseError) {
          res.status(err.response.status).json({ message: err.message });
        } else {
          res.status(500).json({ message: 'Something went wrong!' });
        }
        return;
      }
      
    const db = client.db();
    try {
      const result = await db.collection('message').insertOne(newMessage);
      newMessage.id = result.insertedId 
    } catch (err) {
      client.close();
      res.status(500).json({ message: 'Something went wrong!' });
      return;
    }

    client.close();
    res.status(201).json({ message: "Success", body: newMessage });
  }
}

export default handler;
