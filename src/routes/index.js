import { pool } from "../conexion.js"; 
import  express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('index');
});

router.get('/inicio', async (req, res) => {
    res.render('index');
});

router.get('/contacto', async (req, res) => {
    res.render('contacto');
});

router.get('/tienda', async (req, res) => {
    const resultado = await pool.query("SELECT * FROM tblproductos");
    console.log(resultado);
    res.render('tienda', { datos : resultado[0] });
});

router.get('/novedades', async (req, res) => {
    res.render('novedades');
});

export default router;  

