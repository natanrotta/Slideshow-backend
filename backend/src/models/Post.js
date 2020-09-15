const mongoose = require('mongoose');

//Crio meu schema para armazenar as imagens.
const PostSchema = new mongoose.Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    createAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Post", PostSchema);