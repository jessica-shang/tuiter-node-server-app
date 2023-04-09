// import posts from "./tuits.js";
// let tuits = posts;
import * as tuitsDao from 'tuits-dao.js';

const createTuit = async (req, res) => {
  const newTuit = req.body; // retrieve data from HTTP body
  // ID is created by database instead:
  // newTuit._id = (new Date()).getTime()+'';

  newTuit.likes = 0; // initialize likes counter
  newTuit.liked = false; // initialize liked flag

  // tuits.push(newTuit);
  const insertedTuit = await tuitsDao
      .createTuit(newTuit);

  res.json(newTuit); // respond with actual inserted tuit
}

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits();
    res.json(tuits);
}

const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid; // get ID of tuit to update
  const updates = req.body; // get updates from HTTP body
  // const tuitIndex = tuits.findIndex((t) => t._id === tuitdIdToUpdate)
  // tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};

  const status = await tuitsDao // reports success or failure
      .updateTuit(tuitdIdToUpdate,
                  updates);

  res.json(status); // respond with status object
}


const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid; // retrieve ID of tuit we want to remove
  const status = await tuitsDao
      .deleteTuit(tuitdIdToDelete);
  // tuits = tuits.filter((t) =>
                           // t._id !== tuitdIdToDelete);
  res.json(status); // respond with status object
}

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}
