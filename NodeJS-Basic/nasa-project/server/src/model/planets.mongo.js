const mongoose = require("mongoose");

const planetSchema = new mongoose.Schema({
  keplerName: {
    type: String,
    required,
  },
});

module.export = mongoose.model("Planet", planetSchema);
