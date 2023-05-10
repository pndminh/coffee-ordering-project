const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://diemquyen3393:010601@cluster0.oesvtlp.mongodb.net/cof?retryWrites=true&w=majority")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed");
  });

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", newSchema);
module.exports = collection;
