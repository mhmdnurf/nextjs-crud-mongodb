import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quote: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Quote = mongoose.models.Quote || mongoose.model("Quote", QuoteSchema);

export default Quote;
