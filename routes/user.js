const { Router } = require("express");
const {
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
} = require("../controllers/user.controller");

const router = Router();

router.get("/", usersGet); //se llama la referencia a la misma

router.put("/:idUser", usersPut);

router.post("/", usersPost);

router.delete("/", usersDelete);

module.exports = router;