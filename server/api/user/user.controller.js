// exports.test = (req, res) => {
//   res.send('API user route works!');
// }

'use strict'

const models  = require('../../models/db');

exports.allUsers = (req, res) => {
  models.User.findAll()
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    })
}


exports.singleUser = (req, res) => {
  let id = req.params.id;

  models.User.findById(id,{
   include: [{
     model:models.Book,as:'Reading',
     attributes:['title','author']
   }]
  })
    
    .then(user => {
      res.json(user);
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    })
}