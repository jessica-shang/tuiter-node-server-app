import mongoose from 'mongoose'; // load mongoose library
// create schema
const schema = mongoose.Schema({
                                 topic: String,
                                 userName: String,
                                 time: String,
                                 title: String,
                                 image: String,
                                 replies: Number,
                                 retuits: Number,
                                 handle: String,
                                 tuit: String,
                                 likes: Number,
                                 liked: Boolean,
                                 dislikes: Number,
                                 disliked: Boolean,
                               }, {collection: 'tuits'}); // collection name where tuits are stored in tuiter database
export default schema;

