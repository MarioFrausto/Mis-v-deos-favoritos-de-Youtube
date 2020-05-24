const router = require('express').Router();

const addController = require('../controllers/addController');

router.get('/', addController.list);
router.get('/category/:category', addController.listbycategory); 
router.post('/add', addController.save);
router.get('/update/:id', addController.edit);
router.post('/update/:id', addController.update);
router.get('/delete/:id', addController.delete);

router.get('/', (req, res) => {
  res.render('index', { title: 'MIS VIDEOS FAVORITOS' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'CONTACTAME' });
});


router.get('/add', (req, res) => {
  res.render('add', { title: 'Agregar video favorito' });
  
 
});
module.exports = router;
