import mongoose from 'mongoose';
import tuitsSchema from './tuits-schema.js'

// create mongoose model from the schema
// models provide functions to interact w/MongoDB programatically
const tuitsModel = mongoose
    .model('TuitModel', tuitsSchema);
export default tuitsModel;

