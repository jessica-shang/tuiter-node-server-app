import mongoose from 'mongoose'; // load mongoose library
// create schema
const schema = mongoose.Schema({
                                 tuit: String, // tuit property of type String
                                 likes: Number, // likes property of type Number
                                 liked: Boolean, // liked property of type boolean
                               }, {collection: 'tuits'}); // collection name where tuits are stored in tuiter database
export default schema;

