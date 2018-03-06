const SkillsAPI = {
  skills: [
    { name: "React.js", link: "https://reactjs.org/", image:"https://i.imgur.com/knfmPwC.png"},
    { name: "Redux", link: "https://redux.js.org/", image:"https://i.imgur.com/T1hwnYD.png"},
    { name: "Node.js", link: "https://nodejs.org/en/", image:"https://i.imgur.com/MTzCnzK.png"},
    { name: "Ruby on Rails", link: "http://rubyonrails.org/", image:"https://i.imgur.com/XBj05B9.png"},
    { name: "Javascript", link: "https://www.javascript.com/", image:"https://i.imgur.com/yCZJlV3.png"},
    { name: "SQL", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", image:"https://i.imgur.com/uVa2Lma.png"},
    { name: "Express", link: "https://expressjs.com/", image:"https://i.imgur.com/AzDClu4.png"},
    { name: "Python", link: "https://www.python.org/", image:"https://i.imgur.com/Op5fJPo.png"},
    { name: "C++", link: "http://www.cplusplus.com/max", image:"https://i.imgur.com/6iKMu0P.png"},
    { name: "Max/MSP", link: "https://cycling74.com/products/max/", image:"https://i.imgur.com/yS6rt82.png"},
    { name: "PureData", link: "https://puredata.info/", image:"https://i.imgur.com/uB3Yiys.png"},
  ],
  employment: [
    {employer: "Behavioral Health Works", year: "2017", description: "Music therapy with autistic children utilizing applied behavioral analysis."},
    {employer: "Forced Exposure", year: "2016", description: "Processed global distribution of music media at one of North America’s largest independent music distributors."},
    {employer: "Girls Rock DC", year: "2015", description: "Sound engineer for all-girls rock camp in Washington, DC."},
  ],
  education: [
    {name: "Le Wagon Montreal", degree:"Fullstack Developer Bootcamp", year:"2017"},
    {name: "CareerFoundry", degree:"User Experience Certificate", year:"2016"},
    {name: "American University", degree:"Psychology BA", year:"2010-2015"},
  ],
  contact: [
    {name:"Email", description: "me@mikecassidy.info"},
    {name:"LinkedIn", description: "https://www.linkedin.com/in/mike-cassidy-41847069/"},
    {name:"Github", description: "https://github.com/Mcas4150"},
  ],

  all: function() { return this.skills}
  // get: function(id) {
  //   const isProject = p => p.name === id
  //   return this.projects.find(isProject)
  // }
}

export default SkillsAPI
