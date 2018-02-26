const ProjectAPI = {
  projects: [
    { name: "Synthesizer", description: "A synth built with Web Audio API, aesthetically inspired by the Roland SH-7", url:"http://www.mike-cassidy.online/"},
    { name: "La Rama", description: "An E-commerce store prototype for Montreal's finest vinyl record purveyor", url:"http://fierce-waters-95137.herokuapp.com/" },
    { name: "Isabella", description: "A Musician Tour Date Page", url:"http://guarded-plains-27954.herokuapp.com"},
    { name: "Commons", description: "An Airbnb clone for create space usage", url:"http://www.commons.fun/" },

  ],
  all: function() { return this.projects},
  get: function(name) {
    const isProject = p => p.name === name
    return this.projects.find(isProject)
  }
}

export default ProjectAPI
