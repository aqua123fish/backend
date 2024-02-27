const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const experimentSchema = new Schema(
    {
        typea: { type: Schema.Types.Mixed, required: true },
        typeb: { type: Schema.Types.Mixed, required: true },
        typec: { type: Schema.Types.Mixed, required: true },
        typed: { type: Schema.Types.Mixed, required: true },
        typee: { type: Schema.Types.Mixed, required: true },
        typef: { type: Schema.Types.Mixed, required: true },
        typeg: { type: Schema.Types.Mixed, required: true },
        typeh: { type: Schema.Types.Mixed, required: true },
    },
    { timestamps: true }
);
module.exports = mongoose.model("experimentSchema", experimentSchema);