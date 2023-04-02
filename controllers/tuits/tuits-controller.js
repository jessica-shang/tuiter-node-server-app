import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
  const newTuit = req.body; // retrieve data from HTTP body
  newTuit._id = (new Date()).getTime()+''; // add _id field as a time stamp
  newTuit.likes = 0; // initialize likes counter
  newTuit.liked = false; // initialize liked flag
  tuits.push(newTuit); // append new tuit to tuits array
  res.json(newTuit); // respond with new tuit
}

const findTuits = (req, res) =>
    res.json(tuits);

const updateTuit = (req, res) => {
  const tuitdIdToUpdate = req.params.tid; // get ID of tuit to update
  const updates = req.body; // get updates from HTTP body
  const tuitIndex = tuits.findIndex( // find index of tuit to update
      (t) => t._id === tuitdIdToUpdate)
  tuits[tuitIndex] = // update element in tuits array
      {...tuits[tuitIndex], ...updates}; // merging old tuit w/updates
  res.sendStatus(200); // OK success status
}


const deleteTuit = (req, res) => {
  const tuitdIdToDelete = req.params.tid; // retrieve ID of tuit we want to remove
  tuits = tuits.filter((t) => // filter out tuit from tuits array
                           t._id !== tuitdIdToDelete);
  res.sendStatus(200); // OK success status
}

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}
