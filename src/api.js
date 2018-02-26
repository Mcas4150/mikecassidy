const ProjectAPI = {
  projects: [
    { name: "Synthesizer", description: "This is a synth made with web audio", url:"http://www.mike-cassidy.online/"},
    { name: "La Rama", description: "A Vinyl Record store using Discogs API", url:"http://fierce-waters-95137.herokuapp.com/" },
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
