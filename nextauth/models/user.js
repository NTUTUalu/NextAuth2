import mongoose, {Schema, models} from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
},
//the code below will help us know when the data wass created
{timestamps: true}
);

//if we already have the user then return the schema otherwise create a new one
const User = models.User || mongoose.model("User", userSchema);
export default User;


