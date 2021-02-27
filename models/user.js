const { Schema, model } = require("mongoose");

const UserSchema = Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es obligatorio"],
    },
    email: {
        type: String,
        required: [true, "El email es obligatorio"],
        unique: true,
    },
    image: {
        type: String,
    },
    role: {
        type: String,
        require: true,
        enum: ["ADMIN_ROLE", "USER_ROLE"],
    },
    status: {
        type: Boolean,
        default: true,
    },
    google: {
        type: Boolean,
        default: false,
    },
});

module.exports = model('User', UserSchema);