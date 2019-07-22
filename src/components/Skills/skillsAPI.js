const SkillsAPI = {
  skills: [
    {
      name: "React.js",
      link: "https://reactjs.org/",
      image: "devicon-react-original"
    },
  
    {
      name: "Node.js",
      link: "https://nodejs.org/en/",
      image: "devicon-nodejs-plain"
    },
    {
      name: "Rails",
      link: "http://rubyonrails.org/",
      image: "devicon-rails-plain"
    },
    {
      name: "Javascript",
      link: "https://www.javascript.com/",
      image: "devicon-javascript-plain"
    },
    {
      name: "Mongodb",
      link: "https://mongodb.com",
      image: "devicon-mongodb-plain"
    },
    {
      name: "Express",
      link: "https://expressjs.com/",
      image: "devicon-express-original"
    },
    {
      name: "Python",
      link: "https://www.python.org/",
      image: "devicon-python-plain"
    },
    {
      name: "C++",
      link: "http://www.cplusplus.com/max",
      image: "devicon-cplusplus-plain"
    }
    // { name: "Max/MSP", link: "https://cycling74.com/products/max/", image:"https://i.imgur.com/yS6rt82.png"},
    // { name: "PureData", link: "https://puredata.info/", image:"https://i.imgur.com/uB3Yiys.png"},
  ],
  employment: [
    {
      employer: "Behavioral Health Works",
      year: "2017",
      description:
        "Music therapy with autistic children utilizing applied behavioral analysis."
    },
    {
      employer: "Forced Exposure",
      year: "2016",
      description:
        "Processed global distribution of music media at one of North America’s largest independent music distributors."
    },
    {
      employer: "Girls Rock DC",
      year: "2015",
      description: "Sound engineer for all-girls rock camp in Washington, DC."
    }
  ],
  education: [
    {
      name: "Le Wagon Montreal",
      degree: "Fullstack Developer Bootcamp",
      year: "2017"
    },
    {
      name: "CareerFoundry",
      degree: "User Experience Certificate",
      year: "2016"
    },
    { name: "American University", degree: "Psychology BA", year: "2010-2015" }
  ],
  contact: [
    { name: "Email", description: "mailto:me@mikecassidy.info" },
    {
      name: "LinkedIn",
      description: "https://www.linkedin.com/in/mike-cassidy-41847069/"
    },
    { name: "Github", description: "https://github.com/Mcas4150" },
    { name: "Soundcloud", description: "https://github.com/Mcas4150" }
  ],

  all: function() {
    return this.skills;
  }
  // get: function(id) {
  //   const isProject = p => p.name === id
  //   return this.projects.find(isProject)
  // }
};

export default SkillsAPI;
