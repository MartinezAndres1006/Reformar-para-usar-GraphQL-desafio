
import { Router } from "express";
import passport from 'passport';
const registro = Router();

registro.get('/', (req, res) => {
    res.render('registrarse');
});

registro.post('/', passport.authenticate('registro', {
    successRedirect: '/login',
    failureRedirect: '/errorRegistro',
}));

export default registro