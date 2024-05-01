import connect from "../../../utils/db";
import { NextResponse } from "next/server";
import Quote from "../../../../models/Quote";

export const GET = async () => {
  try {
    await connect();
    const quotes = await Quote.find().limit(5);
    return NextResponse.json(quotes);
  } catch (error) {
    console.error("Database connection failed", error);
  }
};
