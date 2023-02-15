
exports.multiplicar = (req, res, next) => {
    let numero1 = req.params.numero1;
    let numero2 = req.params.numero2;
    let resultado = numero1*numero2;
    res.status(200).send(`${resultado}`);
    

};

exports.divisao = (req, res, next) => {
    let numero1 = req.params.numero1;
    let numero2 = req.params.numero2;
    let resultado2 = numero1/numero2;
    res.status(200).send(`${resultado2}`);
    
};

exports.soma = (req, res, next) => {
    let numero1 = req.params.numero1;
    let numero2 = req.params.numero2;
    let resultado3 = parseInt(numero1) + parseInt(numero2);
    res.status(200).send(`${resultado3}`);
    
};

exports.subtracao = (req, res, next) => {
    let numero1 = req.params.numero1;
    let numero2 = req.params.numero2;
    let resultado4 = numero1-numero2;
    res.status(200).send(`${resultado4}`);
    
};

exports.desafio = (req,res,next) => {
let pessoa = {
nome: 'Ana',
idade: 22
}
res.status(200).json(pessoa);
}

exports.api = (req,res) => {
const user_id = req.query.id;
const token = req.query.token;
const geo = req.query.geo;

res.send({
'user_id' : user_id,
'token' : token,
'geo' : geo
})
}

exports.usuario = (req, res, next) => {

    let nome = req.body.nome;
    let idade = req.body.idade;

    res.status(200).send(`nome ${nome} idade ${idade}`);
};






