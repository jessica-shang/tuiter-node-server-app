import people from './users.js' // import the array of users. Include the extension
let users = people

const UserController = (app) => { // use express instance app to declare HTTP GET
  app.get('/api/users', findUsers)
  app.get('/api/users/:uid', findUserById); // map path pattern to handler function
  app.post('/api/users', createUser);
  app.delete('/api/users/:uid', deleteUser);
  app.put('/api/users/:uid', updateUser);
}

// function called if URL matches pattern of api/users/:uid
const findUserById = (req, res) => {
  const userId = req.params.uid; // get uid from request parameter map
  const user = users
      .find(u => u._id === userId); // find user in users array whose _id
  res.json(user); // respond to client with user found
}

// function runs when /api/users requested
const findUsers = (req, res) => {
  const type = req.query.type // retrieve type parameter from query
  if(type) { // if type parameter in query
    const usersOfType = users // find users of that type
        .filter(u => u.type === type)
    res.json(usersOfType) // respond with users of that type
    return; // return so it doesn't continue
  }
  res.json(users) // otherwise respond with all users
}

const createUser = (req, res) => {
  const newUser = req.body; // extract new user from BODY in request
  newUser._id = (new Date()).getTime() + ''; // add an _id property with unique timestamp
  users.push(newUser); // append new user to users array
  res.json(newUser); // respond with new user to client
}

const deleteUser = (req, res) => {
  const userId = req.params['uid']; // get user ID from path parameter uid
  users = users.filter(usr =>
                           usr._id !== userId); // filter out the user with right ID
  res.sendStatus(200); // respond with success code
}

// handle PUT /api/users/:uid
const updateUser = (req, res) => {
  const userId = req.params['uid']; // get user ID from path
  const updates = req.body; // BODY includes updated fields
  users = users.map((usr) => // create a new array of users
                        usr._id === userId ? // if current user's ID matches ID
                            {...usr, ...updates} : // merge old usr with new updates
                        usr // otherwise keep the old user
  );
  res.sendStatus(200); // return OK
}

export default UserController // exports so app.js can import