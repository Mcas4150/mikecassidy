const ProjectAPI = {
  projects: [
    { name: "Bentennas(beta)",
      image: "https://i.imgur.com/I2uMbmw.jpg",
      description: "An internet radio station inspired by NTS radio",
      url:"https://bentennas.herokuapp.com",
      github:"https://github.com/Mcas4150/Bentennas-MKII"

    },
    { name: "SynthFolio",
      image: "https://i.imgur.com/I2uMbmw.jpg",
      description: "My original portfolio page, which doubles as synth built with Web Audio API. Aesthetically inspired by the Roland SH-7",
      url:"http://synthfolio.herokuapp.com/",
      github:"https://github.com/Mcas4150/SynthFolio"

    },
    {
      name: "La Rama",
      image: "https://i.imgur.com/I2uMbmw.jpg",
      description: "An E-commerce store prototype for Montreal's finest vinyl record purveyor. Built using Discogs.com API with Ruby on Rails",
      url:"http://fierce-waters-95137.herokuapp.com/",
      github:"https://github.com/Mcas4150/La-Rama-Records"
    },
    {
      name: "Isabella",
      image: "https://i.imgur.com/I2uMbmw.jpg",
      description: "A musician tour date page inspired by the infamous blue screen of death",
      url:"http://guarded-plains-27954.herokuapp.com",
      github:"https://github.com/Mcas4150/Isabella"
    },
    {
      name: "Commons",
      image: "https://i.imgur.com/I2uMbmw.jpg",
      description: "An Airbnb clone for creative space usage. Le Wagon Bootcamp collaborative final project",
      url:"http://www.commons.fun/",
      github:"https://github.com/Mcas4150/COMMONS"
    },

  ],
  all: function() { return this.projects},
  get: function(name) {
    const isProject = p => p.name === name
    return this.projects.find(isProject)
  }
}

export default ProjectAPI
