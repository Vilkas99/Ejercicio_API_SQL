const {Router} = require('express'); 

const controladores = require('../controllers'); 

const router = Router();

router.get('/', (req, res) => res.send("Bienvenido"));

router.post('/users', controladores.createUser);
router.get('/users', controladores.getAllUsers);

module.exports = router;