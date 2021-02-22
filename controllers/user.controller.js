const { response, request } = require('express');




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

const usersPost = (req, res = response) => {
    const body = req.body;
    res.json({
        msj: 'post API from controller to ',
        body
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