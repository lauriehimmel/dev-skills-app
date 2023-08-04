// import our model data todosDB  -> getAll

const Skill = require('../models/skill')

module.exports = {
    getAll, 
    getOne,
    newSkill,
    createSkill,
    deleteSkill,
    edit,
    updateSkill
}

function getAll(req,res) {
    const contextObject = {
        title: 'All Skills',
        skills: Skill.getAll()
    }
    res.render('skills/index', contextObject)
}

function getOne(req,res) {
    const clickedSkill = req.params.id
    console.log('reqqqqq', Skill.getOne(clickedSkill))
    const contextObject = {
        title: 'A Skill',
        skillName: Skill.getOne(clickedSkill)
    }
    res.render('skills/show', contextObject)
}

function newSkill(req,res) {
    res.render('skills/new', {title: 'New Skill'});
}

function createSkill(req,res) {
    Skill.createSkill(req.body);
    res.redirect('/skills');
}

function deleteSkill(req,res) {
    const toDelete = req.params.id
    Skill.deleteSkill(toDelete);
    res.redirect('/skills');
}

function edit(req, res) {
    const updateId = req.params.id;
    res.render("skills/edit", { title: "Edit Skills", skill: Skill.getOne(updateId) });
  }

function updateSkill(req, res) {
    // const clickedSkill = req.params.ability
    // console.log('reqparamsskill', clickedSkill)
    // req.body.ability = clickedSkill
    // console.log('dddata', req.body, 'data passed to update')
    // Skill.updateSkill(clickedSkill, req.body)
    // res.redirect(`/skills/${clickedSkill}`)


    const id = Number(req.params.id)
    console.log('reqparamsid', id)
    // req.body.ability = id 
    console.log('dddata', req.body, 'data passed to update')
    Skill.updateSkill(id, req.body)
    res.redirect(`/skills/${id}`) 
}