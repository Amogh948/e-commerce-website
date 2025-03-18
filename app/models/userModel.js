import {Schema,model} from "mongoose"

const userSchema = new Schema({
    name: {type:String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true
    },
    phoneNo: {
        type: Number,
        required: true,
        unique: true
    },
    userRegistered: { 
        type: Boolean,
        default: true 
    }
},{timestamps: true})

const User = model("User",userSchema)

export default User