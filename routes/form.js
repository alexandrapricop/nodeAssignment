const express = require('express');

const Router = express.Router();

class User {
    constructor(name, email, favoriteAnimal ) {
      this.name = name;
      this.email = email;
      this.favoriteAnimal = favoriteAnimal;
    }
  }

let userInfo;

Router.get('/', (req,res,next) => {
    res.render('form', {pageTitle: 'Log In'})
});

Router.post('/', (req,res) => {

    const name = req.body.name;
    const email = req.body.email;
    const favoriteAnimal = req.body.animal;
    userInfo = new User(name, email, favoriteAnimal);
    exports.user = userInfo;
    res.redirect('/user');
});


exports.route = Router;

