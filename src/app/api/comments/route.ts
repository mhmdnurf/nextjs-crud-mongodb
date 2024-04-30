import connect from "../../../utils/db";
import { NextResponse } from "next/server";
import Comment from "../../../../models/comment";

export const GET = async () => {
  try {
    await connect();
    const comments = await Comment.find().limit(10);
    console.log(comments);
    return NextResponse.json(comments);
  } catch (error) {
    console.error("Database connection failed", error);
  }
};
