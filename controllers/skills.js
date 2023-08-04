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
    const clickedSkill = req.params.ability
    
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
    const toDelete = req.params.ability
    Skill.deleteSkill(toDelete);
    res.redirect('/skills');
}

function edit(req, res) {
    const updateAbil = req.params.ability;
    res.render("skills/edit", { title: "Edit Skills", skill: Skill.getOne(updateAbil) });
  }

function updateSkill(req, res) {
    const clickedSkill = req.params.ability
    req.body.ability = clickedSkill
    console.log('hi', clickedSkill)
    Skill.updateSkill(clickedSkill, req.body)
    res.redirect(`/skills/${clickedSkill}`)
}