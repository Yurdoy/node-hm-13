import mongoose from "mongoose";

const magazineSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    issueNumber: {
      type: Number,
      required: true,
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Publisher",
      },
    },
  },
  {
    timestamps: true,
  }
);

export const Magazine = mongoose.model("Magazine", magazineSchema);
