const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');



const usersGet = (req = request, res = response) => {

    const { q, nombre = 'no name', apiKey, page = 1, limit } = req.query
    res.json({
        msj: 'get API from controller',
        q,
        nombre,
        apiKey,
        page,
        limit
    });
}

const usersPost = async(req, res = response) => {
    const { nombre, email, password, rol } = req.body; //aquí estamos haciendo la desestructuración
    const user = new User({ nombre, email, password, rol }); //nueva instancia del usuario

    //Ver si el correo existe 

    //Hacer el hash de la constraseña aquí se hace hace la encriptación de la contraseña
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);
    //guardar en BD

    await user.save();
    res.json({
        user
    });
}

const usersPut = (req, res = response) => {
    const id = req.params.idUser;


    res.json({
        msj: 'Put API from controller',
        id
    });
}
const usersPatch = (req, res = response) => {
    res.json({
        msj: 'Patch API from controller',
    });
}
const usersDelete = (req, res = response) => {
    res.json({
        msj: 'Delete API from controller',
    });
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete,
};