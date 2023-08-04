const skills = [
    {ability: 'forking', category: 'Git', learned: false},
    {ability: 'pull requests', category: 'Git', learned: false},
    {ability: 'arrays', category: 'JS', learned: true},
    {ability: 'creating objects', category: 'JS', learned: false},
    {ability: 'semantic tags', category: 'HTML', learned: false},
    {ability: 'attributes', category: 'HTML', learned: false},
    {ability: 'flexbox', category: 'CSS', learned: false},
    {ability: 'CSS grid', category: 'CSS', learned: false}
  ]
  
  module.exports = {
    getAll,
    getOne,
    createSkill,
    deleteSkill,
    updateSkill
  }
  
  function getAll() {
    return skills;
  }
  
  function getOne(clickedSkill) {
    return skills.find(skill=>skill.ability === clickedSkill)
  }
  
  function createSkill(data) {
    const newSkill = {...data}
    newSkill.learned = data.learned ? true : false
    console.log(newSkill)
    skills.push(newSkill);
    console.log('skills', skills)
  }
  
  function deleteSkill(ability) {
    const skillPosition = skills.findIndex(skill=>skill.ability === ability);
    console.log('skillPosition', skillPosition)
    skills.splice(skillPosition,1);
  }
  
  function updateSkill(ability, data){
    // console.log(ability, data)
    // console.log('middle console long thing')
    let index = skills.findIndex(s=>s.ability == ability)
    // console.log("current todo index", index)
    const updateSkill = {...data}
    updateSkill.learned = data.learned ? true : false
    let updatedSkill = {...skills[index], ...updateSkill}
    // console.log(updatedSkill, '!!!!!!!')
    skills.splice(index, 1, updatedSkill)
  }