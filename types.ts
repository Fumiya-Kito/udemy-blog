import { ObjectId } from "mongodb";


export type Post = {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  isFeatured: boolean;
  slug: string;
  content: string;
};

export type NotificationInfo = {
  status: string;
  title: string;
  message: string|null;
}


export type Message = {
  id?: ObjectId,
  email: string;
  name: string;
  message: string;
}


export type MessageResponse = {
  message: string;
  body?: Message;
};

export class ResponseError extends Error {
  response: Response
 
  constructor(message: string, res: Response) {
    super(message)
    this.response = res
  }
}