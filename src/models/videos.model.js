const mongoose = require("mongoose");
const mongooseAggregate = require("mongoose-aggregate-paginate-v2");
const videosSchema = new mongoose.Schema(
  {
    videoFile: {
      type: String, // cloudnary
      required: true,
    },
    thumbmail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    descriptions: {
      type: String,
      required: true,
    },
    durations: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublish: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

videosSchema.plugin(mongooseAggregate);
export const Videos = mongoose.model("Videos", videosSchema);
