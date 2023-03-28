
import { Router } from "express";
import passport from 'passport';
const Registrorouter = Router();

Registrorouter.get('/registro', (req, res) => {
    res.render('registrarse');
});

Registrorouter.post('/registro', passport.authenticate('registro', {
    successRedirect: '/login',
    failureRedirect: '/errorRegistro',
}));

export default Registrorouter