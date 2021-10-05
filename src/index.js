const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const passport = require('passport');

//connection MySQL
const MySQLStore = require('express-mysql-session');
const session = require('express-session');
const { database } = require('./config');

//intialization
const app = express();
require('./lib/passport');
//setings
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views')); /* se especifica el nombre de la carpeta que se esta buscando con el metodo
_dirname nos dirigimos a donde esta el archivo index.js asi se puede tener acceeso a la carpeta views*/

app.engine('.hbs', exphbs({
    /* Directorios */
    defaultLayout: 'main', /* aqui va el nobre del archivo que se va a leer */
    layoutsDir: path.join(app.get('views'), 'layouts'),/* Con el metodo .join podemos  */
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs')

// Middlewares

// coneccion a MySQL
app.use(session({
    secret: 'encuestasDOC',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database),
}));

app.use(express.urlencoded({extended: false})); // solo recive texto para cargar img se debe poner como verdadero
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) =>{
    app.locals.res = res;
    next();
});

app.use(require('./routes/indexController'));
app.use(require('./routes/authController'));
app.use(express.static(path.join(__dirname, 'public')));/* */

//starting
app.listen(app.get('port'), () => {
    console.log('Server is in port', app.get('port'));
});