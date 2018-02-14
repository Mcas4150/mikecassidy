const SkillsAPI = {
  skills: [
    { name: "React.js", link: "https://reactjs.org/", image:"https://i.imgur.com/knfmPwC.png"},
    { name: "Redux", link: "https://redux.js.org/", image:"https://i.imgur.com/T1hwnYD.png"},
    { name: "Node.js", link: "https://nodejs.org/en/", image:"https://i.imgur.com/MTzCnzK.png"},
    { name: "Ruby on Rails", link: "http://rubyonrails.org/", image:"https://i.imgur.com/XBj05B9.png"},
    { name: "Javascript", link: "https://www.javascript.com/", image:"https://i.imgur.com/yCZJlV3.png"},
    { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", image:"https://i.imgur.com/uVa2Lma.png"},
    { name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Learn/HTML", image:"https://i.imgur.com/9WD0Lho.png"},
    { name: "Express", link: "https://expressjs.com/", image:"https://i.imgur.com/AzDClu4.png"},
    { name: "Python", link: "https://www.python.org/", image:"https://i.imgur.com/Op5fJPo.png"},
    { name: "C++", link: "http://www.cplusplus.com/max", image:"https://i.imgur.com/6iKMu0P.png"},
    { name: "Max/MSP", link: "https://cycling74.com/products/max/", image:"https://i.imgur.com/yS6rt82.png"},
    { name: "PureData", link: "https://puredata.info/", image:"https://i.imgur.com/uB3Yiys.png"},
  ],
  all: function() { return this.skills}
  // get: function(id) {
  //   const isProject = p => p.name === id
  //   return this.projects.find(isProject)
  // }
}

export default SkillsAPI
