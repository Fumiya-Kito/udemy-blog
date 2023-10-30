import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  body?: {
    email: string,
    name: string,
    message: string,
  }
};


function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
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
      res.status(422).json({ message: 'InValid input.'});
      return;
    }

    // send it in a DB
    const newMessage = {
      email,
      name,
      message,
    }

    console.log(newMessage);

    res.status(201).json({message: 'Success', body: newMessage})
  }
}

export default handler;
