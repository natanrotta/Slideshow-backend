const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer')

const Post = require('./models/Post');

//Método responsável por buscar todos os registros.
routes.get('/posts', async (req, res) => {
    const posts = await Post.find();
    return res.json(posts)
});

//Método responsável por salvar.
//Usamos o single, podemos fazer o upload de apenas 1 arquivo por vez.
routes.post('/posts', multer(multerConfig).single('file'), async (req, res) => {
    const { originalname: name, size, key, location: url = "" } = req.file;

    const post = await Post.create({
        name, 
        size, 
        key, 
        url,
    });
    
    return res.json(post);
});

//Método responsável por deletar.
routes.delete('/posts/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    await post.remove();
    return res.send();
})

module.exports = routes;