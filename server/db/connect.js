import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/contactDB")
.then(() => {
    console.log(`Connected successfully`);
})
.catch((error) => {
    console.log(error);
})
