import mongoose from 'mongoose'
const {Schema} = mongoose

const userSchema = new Schema({
    googleID : String,
});

mongoose.model('users',userSchema)
// mongodb+srv://Chandler:xz9TV2jSZvnGJtt7@cluster0.hgvjl.mongodb.net/database?retryWrites=true&w=majority
//xz9TV2jSZvnGJtt7