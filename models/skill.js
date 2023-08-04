const skills = [
    {id: 1, ability: 'forking', category: 'Git', learned: false},
    {id: 2, ability: 'pull requests', category: 'Git', learned: false},
    {id: 3, ability: 'arrays', category: 'JS', learned: true},
    {id: 4, ability: 'creating objects', category: 'JS', learned: false},
    {id: 5, ability: 'semantic tags', category: 'HTML', learned: false},
    {id: 6, ability: 'attributes', category: 'HTML', learned: false},
    {id: 7, ability: 'flexbox', category: 'CSS', learned: false},
    {id: 8, ability: 'CSS grid', category: 'CSS', learned: false}
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
    clickedSkill = Number(clickedSkill)
    return skills.find(skill=>skill.id === clickedSkill)
  }
  
  function createSkill(data) {
    const newSkill = {...data}
    newSkill.learned = data.learned 
    skills.push(newSkill);
  }
  
  function deleteSkill(id) {
    const skillPosition = skills.findIndex(skill=>skill.id === id);
    skills.splice(skillPosition,1);
  }
  
  function updateSkill(id, data){
        // console.log('ability', ability, 'data', data)
    let index = skills.findIndex(s=>s.id == id)
        // console.log('current skill index', index)
    const updateSkill = {...data}
    updateSkill.learned = data.learned ? true : false
    let updatedSkill = {...skills[index], ...updateSkill}
        // console.log('updatedskill', updatedSkill)
    skills.splice(index, 1, updatedSkill)
  }