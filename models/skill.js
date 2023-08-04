const skills = [
    {id: 1, ability: 'Forking', category: 'Git', learned: false, info: ' creates a new repository that shares code and visibility settings with the original “upstream” repository. Forks are often used to iterate on ideas or changes before they are proposed back to the upstream repository, such as in open source projects or when a user does not have write access to the upstream repository.'},
    {id: 2, ability: 'Pull Requests', category: 'Git', learned: false, info: ' let you tell others about changes you\'ve pushed to a branch in a repository on GitHub. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.'},
    {id: 3, ability: 'Arrays', category: 'JS', learned: true, info: ' are objects that enable the storing of a collection of multiple items under a single variable name.'},
    {id: 4, ability: 'Objects', category: 'JS', learned: false, info: ' are king, according to W3 schools. As they say, if you understand objects, you understand JavaScript.'},
    {id: 5, ability: 'Semantic Tags', category: 'HTML', learned: false, info: ' clearly describe their meaning to both the browser and the developer. Non-semantic tags include <div> and <span>, while semantic tags include tags such as <form>, <footer>, <article>'},
    {id: 6, ability: 'Attributes', category: 'HTML', learned: false, info: ' provide additional information about HTML elements. Href and src are both examples of HTML attributes.'},
    {id: 7, ability: 'Flexbox', category: 'CSS', learned: false, info: '  aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word “flex”)'},
    {id: 8, ability: 'CSS Grid', category: 'CSS', learned: false, info: ' is a two-dimensional grid-based layout system that, compared to any web layout system of the past, completely changes the way we design user interfaces. '}
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
    newSkill.id = Date.now() % 1000000
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