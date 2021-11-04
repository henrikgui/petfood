const mongoose = require("mongoose");
const URI = "mongodb://localhost/petfood";

mongoose.set("debug", true);

mongoose
  .connect(URI)
  .then(() => console.log("DB is up."))
  .catch((err) => console.log(err));
