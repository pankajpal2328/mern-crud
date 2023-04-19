const express = require('express');
const router = express.Router();
require('dotenv').config();

const usersRouter = require('./users');

router.get('/', (req, res) => {
    res.json({ message: `Hello from server! ${process.env.PORT}` });
});

router.post('/', (req, res) => {
    res.json({ response: req.body });
});

router.get('/me/:name', (req, res) => {
    res.json({ message: `Hello ${req.params.name} from server!` });
});
  
router.get('/about', (req, res) => {
    res.send('About Us');
});


router.use('/users', usersRouter);





module.exports = router;