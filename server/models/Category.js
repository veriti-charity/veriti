const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        charity: [
            {
                type: Schema.Types.ObjectId,
                ref: "Charity"
            }
        ]
    }
)

const Category = model("Category", categorySchema);

module.exports = Category;