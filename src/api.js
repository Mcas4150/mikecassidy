const ProjectAPI = {
  projects: [
    { name: "Synthesizer", description: "This is a synth made with web audio", image:"https://i.imgur.com/1FObdgV.png"},
    { name: "La Rama", description: "A Vinyl Record store using Discogs API", image:"https://i.imgur.com/CtG6gso.jpg" },
    { name: "Isabella", description: "A Musician Tour Date Page", image:"https://i.imgur.com/E3FFSOX.png"},
    { name: "Commons", description: "An Airbnb clone for create space usage", image:"https://i.imgur.com/BF0PsjC.png" },

  ],
  all: function() { return this.projects},
  get: function(name) {
    const isProject = p => p.name === name
    return this.projects.find(isProject)
  }
}

export default ProjectAPI
