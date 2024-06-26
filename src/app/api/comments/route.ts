import connect from "../../../utils/db";
import { NextResponse } from "next/server";
import Comment from "../../../../models/Comment";

export const GET = async () => {
  try {
    await connect();
    const comments = await Comment.find().limit(3);
    return NextResponse.json(comments);
  } catch (error) {
    console.error("Database connection failed", error);
  }
};
