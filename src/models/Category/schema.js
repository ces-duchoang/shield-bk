const Schema = require("mongoose").Schema;

const categorySchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String }
  },
  { versionKey: false }
);

module.exports = categorySchema;