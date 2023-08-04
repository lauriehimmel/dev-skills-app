var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET skills index listing. - http://localhost:3000/skills/ */ 
router.get('/', skillsCtrl.getAll);

/* GET skills new - http://localhost:3000/skills/new */
router.get('/new', skillsCtrl.newSkill)

/* GET skills show listing. - http://localhost:3000/skills/:ability */ 
router.get('/:id', skillsCtrl.getOne)

/* GET skills edit listing. - http://localhost:3000/skills/:ability/edit */ 
router.get('/:id/edit', skillsCtrl.edit)

/* POST skills create listing - http://localhost:3000/skills/ */
router.post('/', skillsCtrl.createSkill);

/* DELETE skills destroying listing - http://localhost:3000/skills/:ability */
router.delete('/:id', skillsCtrl.deleteSkill);

/* PUT skills updating listing - http://localhost:3000/skills/:ability */
router.put('/:id', skillsCtrl.updateSkill);

module.exports = router;


