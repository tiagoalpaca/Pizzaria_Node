// vamos limitar o volume da requisões, quantos sera mostrados na tela
module.exports = (req,res,next) =>{
    // query sao parametros que tem no thunder client,são dados publicos, nao pode colocar informação sensivel
    let { limit,offset} = req.query;

    limit = Number(limit);
    offset = Number(offset);

    // if de uma linha
    !limit ? limit = 3: null;
    !offset ? offset = 0: null;

    req.query.limit = limit;
    req.query.offset = offset;

    return next();
}