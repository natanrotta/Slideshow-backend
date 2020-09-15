const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
const path = require('path');
const crypto = require('crypto');

const storageTypes = {
    
    //Caso eu queira armazenar elas local na minha pasta, uso essa config.
    local: multer.diskStorage({
        //Caso não tenha o caminho ali do PATH ele usa esse aqui.
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
        },

        //Trata nome da imagem para ter nome único.
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) {
                    cb(err);
                } else {
                    //Converto o hash gerado em hexadecimal e concateno com o nome do arquivo.
                    file.key = `${hash.toString('hex')}-${file.originalname}`;
                    cb(null,  file.key);
                }
            })
        }
    }),

    //Caso eu queira armazenar elas na Amazon, eu uso essa config. Por padrão vou deixar ela default.
    s3: multerS3({
        s3: new aws.S3(),
        bucket: 'natanrotta',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) {
                    cb(err);
                } else {
                    //Converto o hash gerado em hexadecimal e concateno com o nome do arquivo.
                    const fileName = `${hash.toString('hex')}-${file.originalname}`;
                    cb(null, fileName);
                }
            })
        }
    })
}

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),

    //Aqui eu seto aonde quero armazenar, default eu seto o S3.
    storage: storageTypes["s3"],

    //Limita tamanho do arquivo caso seja necessário. Aqui setei arquivos até 2MB.
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    
    //Filtro quais extensões eu vou aceitar.
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png'
        ];
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true)
        } else {
            cb(new Error("O tipo do arquivo é inválido!"))
        }
    }
}