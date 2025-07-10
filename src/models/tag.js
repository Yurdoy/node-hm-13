import mongoose from "mongoose";

const tagSchema = new mongoose.Schema(
  {
    tagName: {
      type: String,
      required: true,
    },
    articles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article",
      },
    ],
  },
  { timestamps: true }
);

export const Tag = mongoose.model("Tag", tagSchema);
