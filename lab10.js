var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    producto = require('./models/prod');
    //user = requir('.')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.send('Hola mundo')
})

app.get('/producto', producto.show);
app.post('/producto', producto.create);

app.post('/producto/update', producto.update);

app.post('/producto/detail', producto.showUpdate);

app.post('/producto/delete', producto.delete);
app.get('/login', function (req, res) {
    res.render('login');
});
app.get('/table',function (req, res) {
    res.render('table');
});
app.get('/new-product',function (req, res) {
    res.render('producto');
});
app.listen(9090, function () {
    console.log('Iniciando! ');
});
