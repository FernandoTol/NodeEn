const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path')

//intialization
const app = express();

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

app.use(require('./routes/indexController'));
app.use(express.static(path.join(__dirname, 'public')));/* */

//starting
app.listen(app.get('port'), () => {
    console.log('Server is in port', app.get('port'));
});