import mongoose ,{schema} from "mongoose";

const subscriptionSchema = new schema({

    subscriber:{
        type: schema.Types.ObjectId,   // one who is subscribing
        ref: "User"
    },
    channel:{
        type : schema.Types.ObjectId,   // one who is being subscribed
        ref: "User"
    }

},{timestamps: true});

export const subscription = mongoose.model("Subscription" , subscriptionSchema)