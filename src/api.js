const ProjectAPI = {
  projects: [
    { name: "Synthesizer", description: "This is a synth made with web audio" },
    { name: "La Rama", description: "A Vinyl Record store using Discogs API" },
    { name: "Isabella", description: "A Musician Tour Date Page" },
    { name: "Commons", description: "An Airbnb clone for create space usage" },

  ],
  all: function() { return this.projects},
  get: function(id) {
    const isProject = p => p.name === id
    return this.projects.find(isProject)
  }
}

export default ProjectAPI
