const express = require('express');

const Router = express.Router();

const formData = require('./form');

Router.get('/user', (req,res) => {
    const user = formData.user;
    res.render('userProfile', {
        pageTitle: 'Profile',
        userName: user.name,
        userEmail: user.email,
        userAnimal: user.favoriteAnimal
    })
})

module.exports = Router;