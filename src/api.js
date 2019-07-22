const ProjectAPI = {
  projects: [
    {
      name: "PropheC++",
      image: "https://i.imgur.com/I2uMbmw.jpg",
      description: "Sequential Circuits Pro-One Synthesizer VST/AU Plugin",
      url: "https://github.com/Mcas4150/PropheCPlusPlus",
      github: "https://github.com/Mcas4150/PropheCPlusPlus"
    },
    {
      name: "Audio Plugins",
      image: "https://i.imgur.com/I2uMbmw.jpg",
      description: "Audio VST/AU plugins, built in C++ using JUCE",
      url: "https://github.com/Mcas4150/audio-effects",
      github: "https://github.com/Mcas4150/audio-effects"
    },
    {
      name: "Orphan Records.",
      image: "https://i.imgur.com/I2uMbmw.jpg",
      description: "An Independent Record Label based in NYC",
      url: "http://www.orphan.world",
      github: "https://github.com/Mcas4150/OrphanRadio"
    },

    {
      name: "SynthFolio",
      image: "https://i.imgur.com/I2uMbmw.jpg",
      description:
        "My original portfolio, which doubles as a synth using Web Audio API",
      url: "http://synthfolio.herokuapp.com/",
      github: "https://github.com/Mcas4150/SynthFolio"
    },
    {
      name: "Sneakatrax",
      image: "https://i.imgur.com/I2uMbmw.jpg",
      description: "Music-sharing platform built using MERN stack",
      url: "https://sneakatrax.herokuapp.com",
      github: "https://github.com/Mcas4150/sneakatrax"
    },
    {
      name: "La Rama (Under Renovation)",
      image: "https://i.imgur.com/I2uMbmw.jpg",
      description:
        "A Webstore for Montreal's finest vinyl record purveyor",
      url: "http://larama.herokuapp.com/",
      github: "https://github.com/Mcas4150/La-Rama-Records"
    },

    {
      name: "Isabella",
      image: "https://i.imgur.com/I2uMbmw.jpg",
      description: "Tour page inspired by the Blue Screen of Death",
      url: "http://guarded-plains-27954.herokuapp.com",
      github: "https://github.com/Mcas4150/Isabella"
    },

    {
      name: "WeatherMap",
      image: "https://i.imgur.com/I2uMbmw.jpg",
      description: "Weather App built with React.js and Openweather Api",
      url: "https://weathermap-mikecassidy.herokuapp.com",
      github: "https://github.com/Mcas4150/OpenweatherReact"
    },
    {
      name: "SlideShow",
      image: "https://i.imgur.com/I2uMbmw.jpg",
      description: "Slideshow App built with React.js and Mongodb",
      url: "https://mikecassidyslideshow.herokuapp.com/",
      github: "https://github.com/Mcas4150/slideshow"
    }
  ],
  all: function() {
    return this.projects;
  },
  get: function(name) {
    const isProject = p => p.name === name;
    return this.projects.find(isProject);
  }
};

export default ProjectAPI;
