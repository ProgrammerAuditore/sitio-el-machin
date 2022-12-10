import { APP as configApp } from "./config.js";
import express from "express";
import path from 'path';
import {fileURLToPath} from 'url';
import exphbs from  'express-handlebars';
import router from "./routes/index.js";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

// Establacer la ruta para las vistas
app.set('views', path.join(__dirname, 'views'));

// Configurar el motor de plantillas Express Handlebars
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), "layout"),
    partialsDir: path.join(app.get('views'), "partials"),
    extname: '.hbs',

    // * Solventar el error:
    // * https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access
    //handlebars: allowInsecurePrototypeAccess(Handlebars)
    
}));

// Utilizar el motor de plantillas para las vistas
app.set('view engine', '.hbs'); 

// ! Usar archivos publi
app.use(express.static(path.join(__dirname,'public')));

// Validar información HTTP
//app.use(express.urlencoded({extended: false})); 
//app.use(express.json());   

// ! Routes
app.use(router);

// ! Error 404
app.use(function(req, res, next){
    res.status(404).render('404');
});

app.listen(configApp.PORT,
    () => console.log(`Server: On Port ${configApp.PORT}`)
);